
 Reuse checkbox :
 =================

One way to think about it is when Reuse is selected-> it’s like copying-and-pasting all of the snaps from the child pipeline
into the parent pipeline where the Pipeline Execute snap is. 

When reuse is not selected, the child pipeline will be executed to completion for every document that goes into the Pipeline
Execute snap in the parent.

As an example, given a child pipeline that consisted solely of an Aggregate snap and the parent pipeline fed 100 
documents into the Pipeline Execute snap, you would see the following:

With Reuse Enabled:
====================

The Aggregate snap would perform the operation on all 100 documents and output a single document that would be sent out the
Pipeline Execute.

With Reuse Disabled: 
====================

There would be a separate Aggregate snap execution for every document, so the Aggregate would perform its operation on only 
one document and the Pipeline Execute snap would have 100 output documents. One output for every execution.





