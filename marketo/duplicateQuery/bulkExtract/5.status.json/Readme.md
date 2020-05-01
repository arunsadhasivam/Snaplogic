
Status.json:
===========

To regularly check status.

GET /bulk/v1/leads/export/{exportId}/status.json



Input:
=====

same just request as used for others , only create.json has body.


Output:
=======


          [
            {
              "statusLine": {
                "protoVersion": "HTTP/1.1",
                "statusCode": 200,
                "reasonPhrase": "OK"
              },
              "entity": {
                "requestId": "17dfe#171d21a418f",
                "result": [
                  {
                    "exportId": "6a447a1d-6a75-4a86-82b7-c5726cab626a",
                    "format": "CSV",
                    "status": "Queued",
                    "createdAt": "2020-05-01T21:17:47Z",
                    "queuedAt": "2020-05-01T21:17:47Z"
                  }
                ],
                "success": true
              },
              "headers": {
                "content-length": "213",
                "content-type": "application/json;charset=UTF-8" 

              },
              "original": {
                "restUrl": "/bulk/v1/leads/export/6a447a1d-6a75-4a86-82b7-c5726cab626a/status.json?access_token=token",
                "restAuth": "Bearer 38fa2884-b125-445c-85ec-161e483e20de:ab",
              }
            }
          ]
