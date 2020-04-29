
Step 1:
======

get marketo token:
      {{mcz_api_uri}}/identity/oauth/token?grant_type=client_credentials&client_id={{marketo_client_id}}&client_secret={{marketo_client_secret}}

o/p:
====

      {
          "access_token": "17ab5d3c-6bf4-4033-8ab9-796e9bc99ac3:ab",
          "token_type": "bearer",
          "expires_in": 1276,
          "scope": "test.com"
      }


Step 2:
=======

POST {{mcz_api_uri}}/bulk/v1/leads/export/create.json?access_token=17ab5d3c-6bf4-4033-8ab9-796e9bc99ac3:ab

content type : application/json
add content in body:
===================
     
     {
               "fields": [
                  "firstName",
                  "lastName"
               ],
               "format": "CSV",
               "columnHeaderNames": {
                  "firstName": "First Name",
                  "lastName": "Last Name"
               },
               "filter": {
                  "createdAt": {
                     "startAt": "2017-01-01T00:00:00Z",
                     "endAt": "2017-01-31T00:00:00Z"
                  }
               }
       }      
  
  o/p:
  ===
  
        {
          "requestId": "9b02#171c80e02f6",
          "result": [
              {
                  "exportId": "9ed6f52a-6540-4060-a680-c7d077b5f78c",
                  "format": "CSV",
                  "status": "Created",
                  "createdAt": "2020-04-29T22:28:14Z"
              }
          ],
          "success": true
      }


Step 3:
=======

add exportid from top 9ed6f52a-6540-4060-a680-c7d077b5f78c

      GET {{mcz_api_uri}}/bulk/v1/leads/export/9ed6f52a-6540-4060-a680-c7d077b5f78c/status.json?access_token=17ab5d3c-6bf4-4033-8ab9-796e9bc99ac3:ab

o/p:
====

    {
        "requestId": "e14c#171c80f5069",
        "result": [
            {
                "exportId": "9ed6f52a-6540-4060-a680-c7d077b5f78c",
                "format": "CSV",
                "status": "Created",
                "createdAt": "2020-04-29T22:28:14Z"
            }
        ],
        "success": true
    }
