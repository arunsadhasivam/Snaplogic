Acknowledge Timeout Policy:
==========================


Reprocess: 
==========
Lets says below if Rest call takes too much time due to rest and child pipeline call
if Reprocess is set the offset wont get commit and it try to reprocess the message.
offset will remain same it wont move forward. if offset is 10 it wont get committed and still offset remain 
unprocessed.



when /where to use:
===================

mostly used in retry mechanism since if message fails even after 3-5 retry it will be pushed to error queue.
may be that message is not proper format or that message input is invalid.


Continue :
==========

Lets says below if Rest call takes too much time due to rest and child pipeline call
if Continue is set then it move forward to next offset let says if offset is 10 it move forward to 11 offset.
it ignores the record completely.

NOTE:
=====
Continue is best to use only when retry mechanism is enabled i.e if we have mechanism to push the
message (json) to retry queue and try to continue process later. else continue will result in loss of
message.

when /where to use:
===================

Usually used if we are facing n/w issues in current time, so n/w may be up after 1 hr . so it push to retry
queue and commit the offset in main queue. the retry queue will again process and push back to main queue.



E.g :
====




    kafkaConsumer - > Rest Call -> Execute pipeline(ChildPipeline) ->mapper - >  kafkaacknowledge
    
    
    
    Properties:
    ===========
    
    Acknowledgement Timeout : 310 sec
    Acknowledge timeout policy : Reprocess
    Acknowledge mode :Wait after each record
    Fetching timeout : 200 sec
    Auto offset reset : End
    
    
     
    
