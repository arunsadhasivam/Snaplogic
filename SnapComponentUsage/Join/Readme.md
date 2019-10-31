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
    
    
    
    

