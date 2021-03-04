To merge 2 result
===================


      index=<<searchIndex>> "|eval msgArray = split(msg, ",") 
      |eval pipeline_name="test1"
      |eval message_unique_id="1"
      |table   pipeline_name,message_unique_id
      |stats values(pipeline_name) as pipeline_name by message_unique_id  
      
      | appendpipe [
        eval pipeline_name1="test2"
        |eval message_unique_id1="2"
        |table   pipeline_name1,message_unique_id1 
        |stats values(pipeline_name1) as pipeline_name by message_unique_id1 |rename message_unique_id1 as message_unique_id
      ]
      
      
    output:
    =======
    
       1 test1
       2 test2 


Append vs union:
================

      whatever inside the union[ ] brackets should work when run separately but appendPipe does not need to be.
      as you can see you can see access variable which outside the [] bracket i.e main 


when using union
=================

syntax:
========
    
    <<search_index>>  command | union [] 
    
    NOTE:
    =======
      whatever inside the union[ ] brackets should work when run separately but appendPipe does not need to be.


    index=ips_snaplogic_np AdobeStage "Enterprise Marketing"|eval msgArray = split(msg, ",") 
    |eval pipeline_name="test1"
    |eval message_unique_id="1"
    |table   pipeline_name,message_unique_id
    |stats values(pipeline_name) as pipeline_name by message_unique_id  
    | union [
    eval pipeline_name1="test2"
    |eval message_unique_id1="2"
    |table   pipeline_name1,message_unique_id1 
    |stats values(pipeline_name1) as pipeline_name by message_unique_id1 |rename message_unique_id1 as message_unique_id
    ]
