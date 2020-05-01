create a filter:
===============

       
       /POST /bulk/v1/leads/export/create.json?access_token=17ab5d3c-6bf4-4033-8ab9-796e9bc99ac3:ab
INPUT:
======

        [
            {
                "logger": {
                    "pipeLabel": "bulkExtrack",
                    "message": "bulkExtrack"
                },
                "request": {
                    "input": {
                        "fields": [
                            "email",
                            "FirstName",
                            "LastName",
                        ],
                        "format": "CSV",
                        "columnHeaderNames": {
                            "email": "email",
                            "FirstName": "FirstName",
                            "LastName": "LastName"
                        },
                        "filter": {
                          updatedAt":
                          {
                            "startAt":"2020-03-30T08:41:44Z",
                            "endAt":"2020-04-30T08:41:44Z"
                           }
                        }
                    }
                }
            }
        ]
        
        
for using smart filter:
======================
             "filter": {
                              "smartListName": "UserDetails"
                }
NOTE:
====

api give preference to 1 filter query and time should be in ISO 8601 format e.g:"2020-03-30T08:41:44Z"

        
Important:
==========


in marketo you can set dynamic time by creating smartfilter UserDetails

you can choose any field and select "in time frame" field
in time frame - Yesterday if you want daily filter yesterday record , or 1ast month record, last year
        
output:
======


        [
          {
            "response": {
              "statusLine": {
                "protoVersion": "HTTP/1.1",
                "statusCode": 200,
                "reasonPhrase": "OK"
              },
              "entity": {
                "requestId": "9f4f#171d1f94044",
                "result": [
                  {
                    "exportId": "8ee362bd-9e67-41d5-81f4-ade1923639e2",
                    "format": "CSV",
                    "status": "Created",
                    "createdAt": "2020-05-01T20:41:45Z"
                  }
                ],
                "success": true
              },
              "headers": {
                "content-length": "179",
                "content-type": "application/json;charset=UTF-8",
                "date": "Fri, 01 May 2020 20:41:45 GMT",
                "server": "nginx",
                "connection": "keep-alive"
              }
            }
