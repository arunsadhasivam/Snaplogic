To join 2 xml documents


E.g:
===

Mapper1
========

JSON.parse($Project)['Ticket']['Assignemnt']['Project_id'] -> output $project_id

          JSONGenerator->JSONFormatter - > JSONParser -> Router1- (pass)->Mapper1 -> connector1
                                                            |
                                                            (fails)
                                                            |
                                                            if fails(log invalid json )




         connector1 -> JOIN -> Mapper2-> Router2 -(pass) -> Mapper3 ->DocumentTobinary -> JMS Producer
                       |                         |
         Config        |                         (fail)
        FileReader->JSONParser                   |
                                                  -------->  Mapper4 ->DocumentToBinary -> JMSProducer.
                                                  



Mapper 2:
=========
$project_id  from mapper1 output.

$Project_id[$project_input_id] == 'normal'?0:1 -> output variable $level

project_input_id comes from config.


Router2
=======

   $level ==1? high 
   $level ==2 ? low priority ticket

config file
===========


      {
        {
         "project_input_id":"1",
         "priority":"high"
        },

        {
         "project_input_id":"2",
         "priority":"high"
        }

      }

Task:
======


read a json file 

    {
        employee:"Test1",
        id :"",
        desc:"",
        Project: {"Ticket":{ "Assignment":{"Project_id":"1",}}}
      }
      {
        employee:"Test2",
        id :"",
        desc:"",
        Project: {"Ticket":{ "Assignment":{"Project_id":"2"}}}
      }
    }
    
    
    if priority is high it should go to high priority queue else low priority queue.
    
    last transformation you can use JSONFormatter or DocumentToBinary but DocumentToBinary will make it better in encoding
    and split doucments correctly.so better to use document toBinary. Jsonformatter encodes the whole json so it 
    consider as 1 json document even though 3 document exist like below:
    
    it wont sent as 3 separate document to JMS queue it sent as 1 single collection json encoded.
    
    [
      {
        employee:"Test1",
        id :"",
        desc:"",
        Project: {"Ticket":{ "Assignment":{"Project_id":"1",}}}
      },
      {
        employee:"Test2",
        id :"",
        desc:"",
        Project: {"Ticket":{ "Assignment":{"Project_id":"2"}}}
      },
      {
        employee:"Test3",
        id :"",
        desc:"",
        Project: {"Ticket":{ "Assignment":{"Project_id":"3"}}}
      }
      
    }
    
    document to Binary send 3 separate document to queue:
    ======================================================
    
    document 1:
    ============
    
    [
             {
                  employee:"Test1",
                  id :"",
                  desc:"",
                  Project: {"Ticket":{ "Assignment":{"Project_id":"3"}}}
                }
    ]

      
      document 2:
      ===========
      
       [
               {
                  employee:"Test2",
                  id :"",
                  desc:"",
                  Project: {"Ticket":{ "Assignment":{"Project_id":"3"}}}
                }
      ]
      
    document3:
    ===========
    
              [
                    {
                       employee:"Test1",
                       id :"",
                       desc:"",
                       Project: {"Ticket":{ "Assignment":{"Project_id":"3"}}}
                     }
              ]
      
    
    

