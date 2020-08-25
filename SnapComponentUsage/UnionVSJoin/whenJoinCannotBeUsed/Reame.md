
see above wont work since if no back record exists then no way join for (1) , it keeps waiting so timeout.


    kafka->mapper->input ->   Pipeline Execute -> Router(success)(1)------         (1) -Join-> acknowledge          
                                                 |                 |                      | 
                                 no back end record found ----(2)---                (2)---|   
                                                 |                 |
                                                 error--------------

                                
