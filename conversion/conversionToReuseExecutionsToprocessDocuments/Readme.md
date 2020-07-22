conversion to Reuse executions to process documents
====================================================

    1)usually childpipeline accepts head,tail but if "Reuse Executions to Process Documents" is checked 
    then it wont allow head,tail in child pipeline also.
    2) join is not allowed.
    3) head,tail, should be moved to script.
    4)groupby also not supported
    5)Even if we do some processing it is failing, this case instead of head,tail as it is not supported
      in ultra task. it is supported in child pipeline but if "Reuse Executions to Process Documents" is
      checked it is not supported in child pipeline even.
      
