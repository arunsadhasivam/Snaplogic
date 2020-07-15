1) avoid using joins and copy , instead if the document is needed for shorter time use "Pass through" option in mapper.
2) use in childpipeline - check option "Reuse executions to process documents"
  If this flag is not enabled, then a new Pipeline execution is created for each input document.  

