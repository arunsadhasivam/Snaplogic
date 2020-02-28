Kafka Consumer
===============

            Topic:<<topicName>>:
            Partition number:0
            Group ID:<<consumer_group_name>>
            Message count: 0
            Max poll records:10
            Fetching timeout:10000
            Auto commit:no check
            Acknowledge mode:Wait after each record
            Acknowledge timeout (sec):200
            Seek type:Specify Offset
            Offset:132572
            Auto offset reset:Latest
            Key deserializer:String
            Value deserializer:JSON
            Pass through:checked
            Add 1 to offsets:unchecked.
            Snap Execution
            Validate & Execute

kafka connection properties:
============================

                  Label:MSS_MCZ_Kafka_Consumer_Group
                  Bootstrap servers:
                  Bootstrap server:azure-cloud:9092
                  Schema registry URL:

                  Advanced Kafka Properties
                  Advanced Kafka key property |  Advanced Kafka value property:
                  ==============================================================
                  request.timeout.ms :150000
                  max.poll.records:1
                  session.timeout.ms:100000
                  fetch.max.wait.ms:500
                  heartbeat.interval.ms:10000
                  max.poll.interval.ms:300000        //fixed issue by increasing from 100000 to 300000
                  group.initial.rebalance.delay.ms:90000
                  Security protocol:SASL_SSL
                  suggest
                  Truststore filepath*:../shared/azure.truststore.jks
                  Truststore password*:Value is encrypted
                  Keystore filepath:
                  view
                  Keystore file password:
                  Value is encrypted:
                  SSL key password:
                  Value is encrypted:
                  SASL properties
                  SASL mechanism:
                  toggleSvg
                  SCRAM-SHA-512
                  SASL username :test_user
                  SASL password:Value is encrypted



Note:
=====

ultra task you can specify -1 to run for ever 
if run as pipeline you can specify -1 to run for ever or 0 to say till it has message in queue.

maxpollrecords : if mention 100 something, if queue cannot handle loading records  , process
and reload next l00 . i.e before it load 100 next 100 gets loaded pipeline cannot handle
and stop immediately.
