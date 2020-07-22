Streaming Components:
======================

1)head
2)tail
3)groupby
4)Join vs union - union just do merge of 2 documents, Join waits for document and join.
Also important when "Reuse executions to process documents" is checked then join wont work 
it shows multithread latch lock exceptions since it try to wait.

5)groupby

IMPORTANT:
==========

All above 5 components wont work if "Reuse executions to process documents" is checked in "Pipeline Execute" component.
