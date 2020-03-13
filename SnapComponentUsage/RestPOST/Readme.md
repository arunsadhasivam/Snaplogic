Rest POST:
==========

            Service URL*=$restUrl
            HTTP entity=$restEntity
            Batch size:empty
            Show all headers:
            Single file upload: File=
            Single file upload: File key=file
            Single file upload: Filename to be used=
            Upload transfer request type
            Upload body type
            Single file upload: Multipart Content-Type=
            application/octet-stream
            Upload File(s)
            Upload-file key	Upload file	HTTP entity	Filename to be used	Multipart Content-Type	
            =
            file
            =
            =
            =
            =
            Trust all certificates:empty
            Follow redirects:true
            Query parameters:
            Query parameter	Query parameter value	
            HTTP header |Key	Value	
            =
            Authorization  =$restAuth
            Content-Type  = application/json
            Response entity type:DEFAULT
            Read timeout
            900
            Connection timeout :30
            Maximum request attempts:
            5
            Retry request interval
            3
            Retry Policy
            Snap Execution




sample input -paramaters:
==========================
Note : 
======
 input is actual input.

              [
                {
                  "restUrl": "https://test.mktorest.com/rest/v1/companies.json",
                  "restAuth": "Bearer 12345-5cc1-4ada-b078-cf46323f4d07:ab",
                  "restEntity": {
                    "action": "createOrUpdate",
                    "asyncProcessing": false,
                    "input": [
                      {
                        "employee_id":1,
                        "employee_name":"test1",
                        "address":"test1"            
                      },
                      {
                        "employee_id":2,
                        "employee_name":"test2",
                        "address":"test2"            
                      }
                    ]
                  },
                  "logger": {
                    "service": "Enterprise Marketing",
                    "source": "CRM_ACCOUNT",
                    "uniqueId": "IDS_ABX-02132020_045117-4869046f-2dfe-477b-9bd0-5dc62f011f5f-4f6e9b36-762e-4813-9eb3-cd39c82f913e",
                    "pipeLabel": "z_postToMarketo",
                    "message": "Start marketo REST post"
                  },
                  "rest_call_start_time": 1584074107918
                }
               ]
