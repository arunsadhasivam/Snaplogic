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
                            "updatedAt": {
                                "startAt": "2020-04-28",
                                "endAt": "2020-04-28"
                            }
                        }
                    }
                }
            }
        ]
        
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