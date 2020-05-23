SnapLogic Read
===============

Asset Path* : taskname (syncEmpDetails_task)

SnapLogic Update
=================
assetpath: $path_id + '/'+ $job_name 

note: job_name comes from snaplogicRead output:


        SnapLogic Read -> mapper  (true - $parameters.enabled) to enable or disable job. ->SnapLogic Update
                              (passthrough checkbox selected)


 
