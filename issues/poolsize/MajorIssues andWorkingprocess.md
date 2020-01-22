        1) pipeline -> calling pipeline2 ->pipeline 3
                                                                                              Exit pipeline
                                                                                               |(count==0)exit
        mapper ->  checkdb-> readparsefile- router(fileinprocess y/n) -> updatedb - mapper ->route- >mapper(count>0)->Execute Pipeline
                                             |                                                                          |          
                                         quit processing                                                            mapper -> executepipeline 2-> updated db -> put in queue -> end
                                                                                                                               |
                                                                                                                            mapper ->executepipeline3 ->delete file in sharepath



process:
========

1)check the file ->query db -> parse file->if it is in db file and its status is processing ->exit Pipeline ->update db as already file processed.
  set duplicate record as status in db and exit all pipeline
2)if file is not in process already -> parse records in file call 2 pipeline to execute and insert in db and also put in queue.
3)finally delete file from share path.

above works normally if file size is small.
let say if size is huge it gets blocked and if keeps running and keep parsing the file, since we have poolsize of 3
"maximum number of pipeline to execute concurrently(required*)" first pipeline keep running .

1 feel once it gets parameter for 2 pipeline it keeps running and keep runninng other if variables become available.


so it get  in to trouble  so in this case , it is duplicate record already exists eventhough

Poolsize in execute pipeline:
=============================

let says we have pipeline1 (initally) on execute pipeline set poolsize  to 3  and other execute pipeline it is
just 1 .
if the file process parser take lot of time, because of parsingit could not 

Execute Pipeline:
=================


      Label*
      Pipeline*      = pipeline name to execute
      Snaplex        = cluster to run.
      Execution Label =
      
      Pipeline Parameters
        param1 - 
        param2 -
      
      Pool Size*      = maximum number of pipeline to execute concurrently(required*)
  
 

Lets says each pipeline need parameter name like file name to process.

let assume you have given poolsize of 3 and other 2 pipelines have poolsize 1 , which means 1 pipeline is allowed to run concurrently.
then if file is small then based on router conditions and it allow the next pipeline to run or not.
but if file size is big then first pipeline run if it run more than some time 2 pipeline also get executed concurrently.

so make sure when you are giving poolsize in execute pipeline. the second pipeline starts run concurrently although it should not be running.
