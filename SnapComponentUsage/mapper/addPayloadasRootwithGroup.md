

Add root wrapper payload:
=========================

        [
            {
                "input": [
                    {
                        "employee_id": "1",
                        "name": "test",
                        "address": "test",
                        "last_updated_date": "5/29/2019 12:11",
                        "EXPERIENCE": [
                            "company1": {
                                "exp": "1"
                            },
                            "company2": {
                                "exp": "1"
                            }
                        ]
                    },
                    {
                        "employee_id": "2",
                        "name": "test2",
                        "address": "test2",
                        "EXPERIENCE": [
                            "company1": {
                                "exp": "1"
                            },
                            "company2": {
                                "exp": "1"
                            }
                        ]
                    }
                ],
                "logger": {
                    "pipe_label": "z_getEmployeeDetails",
                    "unique_id": "20191118_105659"
                }
            }
        ]

          
add root payload:
=================

        [
            { 
                "payload": {               //newly added
                    "logger": {            //newly added   
                        "pipe_label": "z_getEmployeeDetails",
                        "unique_id": "20191118_105659"
                    }
                },
                "input": [               // wrapped inside payload root newly added
                    {
                        "employee_id": "1",
                        "name": "test",
                        "address": "test",
                        "last_updated_date": "5/29/2019 12:11",
                        "EXPERIENCE": [
                            "company1": {
                                "exp": "1"
                            },
                            "company2": {
                                "exp": "1"
                            }
                        ]
                    },
                    {
                        "employee_id": "2",
                        "name": "test2",
                        "address": "test2",
                        "EXPERIENCE": [
                            "company1": {
                                "exp": "1"
                            },
                            "company2": {
                                "exp": "1"
                            }
                        ]
                    }
                ]
            }
        ]
 
 
 
 Mapper table details:
 =====================
 
 
 
 flow:
 ====
         groupbyN (2)->  join  -> mapper
                          |
                       jsonGenerator   

 
 groupbyN
 =========
 
 
     group byt : 2
     target field : input
 
 
 $input  -> $payload.input
 $logger -> $payload.logger


join:
====

      join : Left outer  // to make sure logger is only one time at the top.
      1-> right -> 1



mapper:
=======

    $logger - > $payload.logger
    $input  -> $payload.input.
