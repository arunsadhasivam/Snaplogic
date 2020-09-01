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
            {
                inputdata
                {
                }
               :::
               ,
               inputdata
               {
               }
            }


            copy - >    mapfields -> group (50)         ->   mapper        -> copy ->splitter  -> group(50) ->  join ($payload
             |          (message_group)       {$input           |
            logger   zero it                $logging }       mapper($logger) 

           

join -     $payload  - $tracking 1 -1 
group by (0) means it group all records to array       


poolsize vs reuse
===================


if we keep the poolsize as 1 and reuse checked then child pipeline return group fifty records.

if we keep the poolsize as 200 and reuse unchecked then child pipeline return group fifty records.

if we keep the poolsize as 200 and reuse then it return full 50 records it wont group.

