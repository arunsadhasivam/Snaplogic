Scenario:
=========

we have router if api or file to process from share path does not exist. we say no
file exists and end. if exists process and write to another file . in that
case if router if file not exists if no documentEnd is there then it will default run successfull i.e 
if file exists process and write to another file . so last write to another file it try to execute.

to avoid processing further to halt further processsing documentEnd is used.


    
    mapper -> router -> no file exists -> documentEnd.
               |
               exist -> process -> filewriter(another file)
