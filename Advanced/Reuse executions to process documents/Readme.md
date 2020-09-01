Reuse executions to process documents:
=====================================

It aggregates all intermediate result to single record.

1) input - > mapper - > childpipeline - > producer
            $input          (resuse -Y)  
            



childpipeline:
===============

          [
            {
                input : 
                { 
                },
                
                input:
                {
                },

                input
                {

                }
               }
           ]         
output:
=======

    payload{
        input[
            {
            
            },
            ::::
            ::::
            {//50
            
            }
        ]
    }


group
======
           [
             {
                inputdata
                {
                
                },
                logger{
                
                }
              },  
                
               :::
              { 
               inputdata
                {
                
                },
                logger{
                
                }
               }
            }


          copy - >    mapfields ->        group (inputdata)(50)    ->  join   ->   mapper {$payload.inputdata,$payload.$logger}
          |          (message_group)            {$id,                  |                  
     tail($logger)(A) $inputdata.email->email    $email}            (A)$logger
                        ignore $logger


join -     $payload  - $tracking 1 -1 
group by (0) means it group all records to array       


poolsize vs reuse
===================


if we keep the poolsize as 1 and reuse checked then child pipeline return group fifty records i.e if 200 then split as 4 (50) grouped records.

if we keep the poolsize as 200 and reuse unchecked then child pipeline return group fifty records as like above.

if we keep the poolsize as 200 and reuse then it return full 50 records it wont group.

