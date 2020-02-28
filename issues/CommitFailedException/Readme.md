ISSUE:
=====

 Commit cannot be completed 
 
Resolution: Please address reported issue.

org.apache.kafka.clients.consumer.CommitFailedException: Commit cannot be completed since the group has 
already rebalanced and assigned the partitions to another member. This means that the time between subsequent
calls to poll() was longer than the configured max.poll.interval.ms, which typically implies that the poll loop is
spending too much time message processing. You can address this either by increasing the session timeout or
by reducing the maximum size of batches returned in poll() with max.poll.records.


Resolution:
============

          increase property of kafka_account - 
          Advanced kafka properties:
          request.timeout.ms:150000
          max.poll.records:1
          session.timeout.ms:100000
          fetch.max.wait.ms : 500
          heartbeat.interval.ms:10000
          max.poll.interval.ms:300000 ( worked after changing prooperty)
          group.initial.rebalance.delay.ms:90000

          SASL_SSL:SASL_SSL
          Truststore filepath*:../shared/proj_truststore.jks

