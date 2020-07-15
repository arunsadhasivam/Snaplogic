
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

for the first we need to set the 
        partition - 0 
        seektype - specific offset
        offset - 0
        
if we purge the queue again need to manually      
        partition - 0 
        seektype - specific offset
        offset - 0
   
   
