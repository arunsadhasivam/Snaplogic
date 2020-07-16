Pipeline Execute
================

in pipeline Execute for better performance Reuse executions is checked it wont do processing for each document it process as whole.


if  "Reuse executions to process documents" is not checked 

      [
         {

          "payload":{

          }

        },

        //all input data 
        "original":{
              input:[
                  {"id": 1 ,"name":"test1","designation":"test"},
                  {"id": 2 ,"name":"test2"},"designation":"test"},
                  {"id": 3 ,"name":"test3"},"designation":"test"},
              ]
        }
      ]

if  "Reuse executions to process documents" is checked 

      [
         {

          "payload":{

          }

        }
      ]
