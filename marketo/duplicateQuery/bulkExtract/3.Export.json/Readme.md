export.json:
============

 GET /bulk/v1/leads/export.json?access_token=7857f25d-fc4e-4499-8166-7367ae6638d0:ab&status=Completed&batchSize=1
 
 
 
 OUTPUT:
 =======
 

     [
      {
        "statusLine": {
          "protoVersion": "HTTP/1.1",
          "statusCode": 200,
          "reasonPhrase": "OK"
        },
        "entity": {
          "requestId": "169c8#171d1f7ac0b",
          "result": [
            {
              "exportId": "77c83ad6-53fc-482a-85c4-1f1a6a9ba52e",
              "format": "CSV",
              "status": "Completed",
              "createdAt": "2020-05-01T20:07:10Z",
              "queuedAt": "2020-05-01T20:07:10Z",
              "startedAt": "2020-05-01T20:08:01Z",
              "finishedAt": "2020-05-01T20:08:19Z",
              "numberOfRecords": 4,
              "fileSize": 252,
              "fileChecksum": "sha256:973949fd8f4749b38bdf89bc4a3701c3f51175452d82185ac992a90e95ba5ed7"
            }
          ],
          "success": true,
          "nextPageToken": "5eac8123a7cbd41508c79937"
        },
        "headers": {
          "content-length": "454",
          "content-type": "application/json;charset=UTF-8",
          "date": "Fri, 01 May 2020 20:40:02 GMT",
          "server": "nginx",
          "connection": "keep-alive"
        },
    ]
 
 
