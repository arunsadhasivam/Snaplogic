To check below json tag in filter before doing mapping

mainflow:(FilterExperienceEmployeeJson)
=========


jsongenerator -> jsonformatter->jsonparser->filter->mapper->pipeline Execute-(call processEmployee)->Document End 

subflow:(processExperienceEmployee)
========

pipelineexcecute call  processEmployee

check exp > 12 process else ignore employee.


    [
    {
     "employeeid":1,
     "experience": "{ "asintern":{"coreexperience":{"overall":12}}}
    }
    ]

filter
=======
    $.hasOwnProperty("experience") && $.experience.length>0 && 'experience' in $ && 'asintern' in JSON.parse($experience)
    && 'coreexperience' in JSON.parse($experience)['asintern'] 
    && 'overall' in JSON.parse($experience)['asintern']['coreexperience']

mapper
======

JSON.parse($experience)['asintern']['coreexperience']['overall']

to get overall exp

pipelineExecute:
================

Pipeline Parameters

overall- > should be common to FilterExperienceEmployeeJson,processExperienceEmployee

in processExperienceEmployee first check the pipelineparameter "overall" i.e overall experience > 12 process else dont process .
====================
overall - overall

common to 2 
