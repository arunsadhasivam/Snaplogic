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

mapper - > group(0)         ->   mapper        -> copy ->splitter  -> group(50) ->  join ($payload
           (message_group)       {$input           |
           zero it                $logging }       mapper($logger) 
                        
           

join -     $payload  - $tracking 1 -1 
group by (0) means it group all records to array           
