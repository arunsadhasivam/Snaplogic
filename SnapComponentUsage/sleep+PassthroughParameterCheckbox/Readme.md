Sleep:
======

This Snap is used to make the pipeline become idle for specified number of milliseconds

Before Execute query you have sleep to 

json, mapquery,router(passthrough and null safe access checked) -> 
 mapper which is before execute query passthrough unchecked for parallel execution
 (passthrough unchecked and null safe access checked) ->
 
 if we have only 3 cores, remaining cant execute parallel so you can have sleep to wait and run once
 3 cores 3 queries run in parallel. so 3 queries / 3 queries  at a stretch run in parallel and complete  12 queries.
 by the 3 queries run remain will be sleep , else all try to run and concurrent exception will return.


you can in the below execute query 

      json -> mapquery-> Router - > Mapper1 -> Execute query1
                                --> Mapper2 -> Execute query2         
                                --> Mapper3 -> Execute query3

                                --> Mapper3 ->sleep-> Execute query3

                                :
                                :
                                --> Mapper12 -> Execute query12
