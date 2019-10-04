input:
=======

 test1.json
 ----------
    
    {
           "userId": 1,
           "id": 4,
           "title": "Anto",
           "completed": true,
           "employee": [
               {
                   "first_name": "test2",
                   "last_name": "last2",
                   "age": 32
               }
           ]
       },


  test2.json:
  -----------
  
    {
            "userId": 1,
            "id": 4,
            "title": "Binu",
            "completed": true,
            "employee": [
                {
                    "first_name": "test2",
                    "last_name": "last2",
                    "age": 32
                }
            ]
        },


  
  
    
    snap design:
    =============

              jsonGenerator -> filter -> mapper->sort
                                                        ->union-> sort->jsonformatter->filewriter.
              jsonGenerator -> filter -> mapper->sort

      jsongenerator -> accepts 2 diff input files (test1.json,test2.json).

      1)jsongenerator -> input json upload

      2)filter -> filter all json files based on condition 
              Filter Expression: 'employee' in $
      3)mapper->above will make sure only json which has employee tag will gets filtered.
              Expression : $+jsonPath($, "")+jsonPath($, "$employee[*].last_name") : target path : $name
              Expression : $+title : target path : $employeename
      4)sort-> output is $employeename, $name from map both are new alias name given in above target path.

      5)union -> both sorted values of jsongenerator (test1.json,test2.json)
      6)sort -> sort by employeename which is title in inputfile.
      7)filewrite -> write to a file.



output of file writer:
======================

     {
         "name": "{userId=1, id=1, title=Anto, completed=false, employee=[{first_name=test2, last_name=last2, age=32}]}{userId=1, id=1, title=Anto, completed=false, employee=[{first_name=test2, last_name=last2, age=32}]}[last2]",
         "employeename": "Anto"
       },
       {
         "name": "{userId=1, id=3, title=Binu, completed=false, employee=[{first_name=test1, last_name=last1, age=32}]}[test1][last1]",
         "employeename": "Binu"
       },
       {
         "name": "{userId=1, id=4, title=Charles, completed=true, employee=[{first_name=test2, last_name=last2, age=32}]}{userId=1, id=4, title=Charles, completed=true, employee=[{first_name=test2, last_name=last2, age=32}]}[last2]",
         "employeename": "Charles"
       },
       {
         "name": "{userId=1, id=4, title=Dinesh, completed=true, employee=[{first_name=test2, last_name=last2, age=32}]}[test2][last2]",
         "employeename": "Dinesh"
       },
