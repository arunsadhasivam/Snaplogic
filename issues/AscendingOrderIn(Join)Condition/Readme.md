

        mapper -> db1(sqldeveloper) ->mapper(emailid)- > validateemail->router (valid email)-> join -inner(Ascending)->kafka queue.
                                                                        |                           |
                                                                      terminate pipeline            |
                                                                                                    |
                                                                                      salesforce-> mapper(emailId)

                                                           



join:
=====

                Join type* - Inner, LeftOuter, Outer, Merge
                Join paths
                Left path	Right input view	Right path	
                ===================================================
                1             	=                                 1
                ====================================================
                1	=                                         1
                Sorted streams* - Ascending,descending,unsorted.

Note:
=====
Unsorted is better for streaming data, since it wont wait for stream to reach at that snap to do aggregate.
like ascending means it waits for all data to reach and do aggregate.


Issue:
======

1) some email id values based on account id comes sql server.
2) some email id values based on account id comes from salesforce.
3) join both using inner join in Ascending order.
4) issue is some mail id in db lets says we are validating ,but salesforce we are not validating.
5) lets says 2 email id is invalid in db. while doing inner join and do Ascending order in join it waits for
 2 invalid record which will never comes. since Ascending order it is sychronous ,i.e data gather at that
  snap and then gets sorted . if 2 email which is invalid which will never reach at join snap.
  because of that pipeline run for ever . since it is waiting for inner join to get mapper for 2 mail id which 
  will never come to join snap since it already got terminated in the validate email -> router snap .

NOTE Important:
==============

so when doing aggregate function in streaming data, be carefull when previous state any router is there like that or any terminating 
condition is there. else it run for ever waiting for data as aggregate functions are synchronous .
