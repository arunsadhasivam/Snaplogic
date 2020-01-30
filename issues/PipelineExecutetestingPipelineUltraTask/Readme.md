Issue:
=====

if pipe accepts a document which will be called from a another pipeline with a document. to test it

Failure: Invalid configuration, Reason: Target pipeline has input views, but no document was provided, Resolution: Pass a document to this snap or remove the target pipeline's input view

flow:
====


main pipeline
============

(expect input)
   ->mapper(with inputView) ->logger-> execute pipeline ->filter -> kafka queue.
   
 
 To test it
 ===========
 
  if you just call pipeline execute calling this pipeline it says "Target pipeline has input views, but no document was provided"
  
  so test it  add a document.
  
  json generator->mapper -> document to Binary -> Binary to Document -> pipelineExecute(call mainpipeline) 
  
  note:
  ====
  above we are passing the static document with json content so it accepts.


Error:
======

property_map.settings.transformations.value.mappingTable.value[0].expression.value: Missing property value

Resolution:
Please fix the snap configuration and try the execution again

Reason:
The snap settings are not correct

