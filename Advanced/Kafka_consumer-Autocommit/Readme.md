
When to set Autocommit to True:
===============================


when you want to read from a particular topic ,usually we set acknowledge Timeout 300 s and then read from the kafka - topic .


it usually read a topic wait for acknowledge and then load next message.

Lets say you have a  topic mainly you want to group to 300 to process fast and clear the messages in kafka topic.
in that case we can set Autocommit true so it just reads a message only read it commit and then move to next message and goes on..
so it is faster in this it wont wait for acknowledge notification it autocommit when reads and then process next message like that.
so but if 300 group message fails due to network or any other issue or db connection failure . all message will be lost since it already commit the 
message offset. so to avoid such cases we need to have retry mechanism to push failed message back to queue and process.

since if fails we push to separate retry topic and from then push back to main current queue so it treats as new message.
