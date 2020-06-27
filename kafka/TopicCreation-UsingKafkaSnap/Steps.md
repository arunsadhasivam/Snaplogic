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

    mapper -> kafkaproducer  ->
    
    kafkaproducer -> account tab give account name and use kafka properties below and then username & password which generated
    above  "User : "emp_admin_dev", Password : Test123"

Use in Kafka producer snap:
===========================

	in kafka snap just need destination topic since topic already mapped to consumer group and consumer group we 
	created a producer,consumer to make sure it works in both cases. if not added both producer & consumer
	it shows "no permission to read from topic" or " no permission to topic it will say 
	
	https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438761/Confluent+Kafka+Consumer

kafka properties:
=================

		Bootstrap servers*
		====================
		kafka-dev-1.com:9092,kafka-dev-2.com:9092,kafka-dev-3.com:9092
		Schema registry URL= ""
		
		Advanced Kafka key property	Advanced Kafka value property	
		==============================================================
		
		request.timeout.ms	=		60000
		... and other properties
		
https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438051/Confluent+Kafka+Snap+Pack		

https://docs-snaplogic.atlassian.net/wiki/spaces/SD/pages/1438761/Confluent+Kafka+Consumer

    
