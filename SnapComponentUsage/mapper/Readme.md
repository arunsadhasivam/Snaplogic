mapper remove common root element:
====================================


              [
                  {
                      "employee": {
                          "employee_id": "1",
                          "email_id": "test1@test.com",
                          "last_updated_date": "5/29/2019 12:11",
                          "experience": [
                              {
                                  "company1": "company1",
                                  "years": "5"
                              },
                              {
                                  "company2": "company2",
                                  "years": "3"
                              }
                          ]
                      }
                  },
                  {
                      "employee": {
                          "employee_id": "2",
                          "email_id": "test2@test.com",
                          "last_updated_date": "7/31/2019 13:05",
                          "experience": [
                              {
                                  "company1": "company3",
                                  "years": "5"
                              },
                              {
                                  "company2": "company4",
                                  "years": "3"
                              }
                          ]
                      }
                  }
              ]

        changes to

              [
                  {
                      "employee_id": "1",
                      "email_id": "test1@test.com",
                      "last_updated_date": "5/29/2019 12:11",
                      "experience": [
                          {
                              "company1": "company1",
                              "years": "5"
                          },
                          {
                              "company2": "company2",
                              "years": "3"
                          }
                      ]
                  },
                  {
                      "employee_id": "2",
                      "email_id": "test2@test.com",
                      "last_updated_date": "7/31/2019 13:05",
                      "experience": [
                          {
                              "company1": "company1",
                              "years": "5"
                          },
                          {
                              "company2": "company2",
                              "years": "3"
                          }
                      ]
                  }
              ]

 

mapping table in mapper:
=======================

$employee -> $  it removes employee wrapper in json 

