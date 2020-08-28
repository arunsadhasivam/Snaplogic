Retry Mechanism
================

1) Retry is needed in ultra task if in case failure message from queue consumed using Consumer Group (CG) after process offset
 persist and move to next offset. if message processed and in case due to n/w it failed then message lost.
2) Need Retry Mechansism if in case of Failure push to Retry Topic and retry the same message for max 3-5 times.

3) process push the message back to main queue from retry queue.

(EMP.MAIN.queue-> EMP.RETRY.QUEUE) if while processing EMP.MAIN.QUEUE fails push to EMP.RETRY.QUEUE and run the EMP.RETRY.QUEUE every 
15 min push back the EMP.RETRY.QUEUE message back to original EMP.MAIN.QUEUE and process .


Design:
=======
                                Exp               Target                      Exp         Target  
                   _____mapper($unacknowledged -$unacknowledged)(A)   ___( "child Pipeline"  $logger.error 
                  |                                                 |
                  |                                                 |
                kafkaconsumer  - > mapper -> ExecutePIpeline(fetchRecords)
                  
                  
                  
                    condition ($.hasPath("unacknowledged") && $unacknowledged != null)
                  (A)-Router ----(yes)--  JsonSplitter ( $unacknowledged)
                     |
                     (no)
                      |
                      Log error
