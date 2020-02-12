Kafka
======


kafka works like read the message from queue and waiting for speculated timelimit specified in configuration,
if it exceeds kafka commit the offset and move forward. 

let says offset is 100 -200 it read 100 waiting for acknowledgement 3 minutes let say if due to error or some other
reason the queue went to error and try to  log in this time if it exceeds 3 minutes, kafka says read commit and
move forward to next sliding like 101 -200.

so if you want to read again 100 in above cases due to error it is not processed by queue so you need to reset and process
again 100 offset.


This is the reason kafka is very fast, it increases the sliding window and move forward if it not read in time frame set.




            =========================================================================================================================== 
            Topic	                   |Partition  |	Beginning_Offset |	Current_Offset|	End_Offset|	Lag	 |Lag_Percent  |View 	
            ============================================================================================================================                 Employee_QUEUE         |	0	   |    8122	       | 9424               |19120	      |9696	   |   50.711296%|View
            ============================================================================================================================
