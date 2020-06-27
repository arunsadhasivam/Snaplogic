Step 1:
=======

create a user to connect to pipeline
 
emp_admin_dev - once created it gives a password.

    "User : "emp_admin_dev", Password : Test123"				
				
				



Step 2:
========
  
  create a topic -EMP.REG.DEV	
  
step 3:
=======

create a consumer group - emp_consumer_group

create a consumer group add as producer for topic EMP.REG.DEV
create a consumer group add as consumer for topic EMP.REG.DEV.

Step 4:
=======

use above created user account to connect to kafka.


      emp_admin_dev	EMP.REG.DEV  	TOPIC	PRODUCER
      emp_admin_dev	EMP.REG.DEV	TOPIC	CONSUMER
      
Step 5:
=======

when connecting to kafka use this user to connect.

    mapper -> kafkaproducer 
