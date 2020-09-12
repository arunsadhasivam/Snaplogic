1)Error:
===========
        Caused by: org.apache.kafka.clients.consumer.CommitFailedException: Offset commit cannot be completed since the consumer is not part of an active group for auto partition assignment; it is likely that the consumer was kicked out of the group.
      at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest(ConsumerCoordinator.java:1109)
      at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync(ConsumerCoordinator.java:976)
      at org.apache.kafka.clients.consumer.KafkaConsumer.commitSync(KafkaConsumer.java:1511)
      at org.apache.kafka.clients.consumer.KafkaConsumer.commitSync(KafkaConsumer.java:1459)
      at com.snaplogic.kafka.snaps.KafkaConsumerSnap.commitOffsets(KafkaConsumerSnap.java:597)
      ... 16 more
    Reason: Offset commit cannot be completed since the consumer is not part of an active group for auto
        partition assignment; it is likely that the consumer was kicked out of the group.
    Resolution: Please address reported issue.


Resolution:
=============



Reason:
========
