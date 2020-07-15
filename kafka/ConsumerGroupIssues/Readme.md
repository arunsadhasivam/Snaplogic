
ISSUE:
======

queue:
======

    EMP.QUEUE

consumergroup1
===============

    EMP.CG1
     
consumergroup2 
==============

   EMP.CG2

if we map EMP.queue to EMP.CG1 and EMP.CG2 it bindings and creates a binding for EMP.CG1 with EMP.QUEUE and EMP.CG2 with EMP.QUEUE


binding:
========

    Consumer Group: EMP.CG1
    TOPIC : EMP.QUEUE	


    Consumer Group: EMP.CG2
    TOPIC : EMP.QUEUE	


ISSUE:
======

     -In snaplogic normal setting will be
        partition - empty ( so it takes all partition in cluster)
        seektype - end
        offset - empty

To allow binding to happen between EMP.CG1 to EMP.QUEUE and EMP.CG2 to EMP.QUEUE:
=================================================================================

    -for the first time of using queue or after purge of queue, we need to set the pipeline hardcoded to make binding happen.
        partition - 0 
        seektype - specific offset
        offset - 0
        
    - Again evenif we purge the queue again need to manually      
        partition - 0 
        seektype - specific offset
        offset - 0
   
    once done binding gets created as below.
        
        Consumer Group: EMP.CG1
        TOPIC : EMP.QUEUE	


        Consumer Group: EMP.CG2
        TOPIC : EMP.QUEUE	

            
