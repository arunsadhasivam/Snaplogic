input:
=====

manager-1 manages  employee 101,102


      "payload" : {
        "input" : [
          {
            "manager_id" : "1",
            "unique_id" : "20200306_164835",
            "subordinates" : [
              {
                "employee_id" : "101",
                "last_updated_date" : "5/29/2019 12:11",
                "ledger_id" : "20200306_164835"
              },
              
              
               {
                "employee_id" : "102",
                "last_updated_date" : "5/29/2019 12:11",
                "ledger_id" : "20200306_164835"
              }
            ]
          },
          
          
          {
            "manager_id" : "3",
            "unique_id" : "20200306_164835",
            "subordinates" : [
              {
                "employee_id" : "301",
                "last_updated_date" : "5/29/2019 12:11",
                "ledger_id" : "20200306_164835"
              },
              
              
               {
                "employee_id" : "302",
                "last_updated_date" : "5/29/2019 12:11",
                "ledger_id" : "20200306_164835"
              }
            ]
          },
        }  


output:
=======

            [
                  {
                  "1":"101,102",
                  "3":"301,202",  //in a string
                  }
            ]
