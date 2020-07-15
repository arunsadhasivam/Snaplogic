 Consumer Group is binded to topic:
 ==================================
 
 when message is read from queue using consumer group EMP.CG1 it creates a binding. if 
 consumer group is reading from topic EMP.QUEUE it makes EMP.CG1 consumer group active.

     Consumer Group | status
     =======================
     EMP.CG1        | Active

once consumer group stops reading status is inactive .

when cg(EMP.CG1) reads a message from topic EMP.QUEUE it creates a binding. if more than 1 consumer group1 is attached
to the topic it creates 2 binding . each offset commit is different for each consumer group.

    EMP.CG1 - Emp.QUEUE ( lets says EMP.CG1  reads 10 messages its begin offset is 10)
    EMP.CG2 - Emp.QUEUE ( lets says EMP.CG2  reads 15 messages its begin offset is 15)
    
    Topic Offset Details
    ====================

         EMP.CG1 > click > Emp.QUEUE

        PARTITION- 0
        BEGINNINGOFFSET-10
        ENDOFFSET-30

        EMP.CG2 > click > Emp.QUEUE

        PARTITION- 0
        BEGINNINGOFFSET-15
        ENDOFFSET-30
    
    As you can even though both EMP.CG1 and EMP.CG2 uses same Queue EMP.QUEUE 
    but it maintains different offset tracking EMP.CG1 -begin offeset 10 and
    EMP.CG2  -begin offeset 15
    
