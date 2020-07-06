Note:
=====

Each consumer group will handle offset separately.

for eg:
=======

EMP.Details.queue has 2 consumer group lets says emp_group_1, emp_group_2
if emp_group_1 is reading offset 10 and commit the offset , when emp_group_2 try to reads it read from 1 only.
since both is different . emp_group_1 offset persist no where mingle with emp_group_2 . since offset tracking
separate for each consumer group.
