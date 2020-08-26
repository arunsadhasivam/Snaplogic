
see above wont work since if no back record exists then no way join for (1) , it keeps waiting so timeout.


    kafka->mapper->input ->   Pipeline Execute -> Router(success)(1)------         (1) -Join-> acknowledge          
                                                 |                 |                      | 
                                 no back end record found ----(2)---                (2)---|   
                                                 |                 |
                                                 error--------------

                                


see Above it won't see because Router success(1) - join will never go if no back end found (2) router selected since
it is if-else . so it keeps waiting. to avoid this use union.



    kafka->mapper->input ->   Pipeline Execute -> Router(success)(1)------         (1) -Union-> acknowledge          
                                                 |                 |                      | 
                                 no back end record found ----(2)---                (2)---|   
                                                 |                 |
                                                 error--------------
