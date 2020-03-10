Issue:
======

Not authorized to access topics: [EMPLOYEE.DEV]

Resolution:
Please report to customer support for further investigation

Reason:
Not authorized to access topics: [EMPLOYEE.DEV]


Solution:
==========

        Add ACL ->producer //to produce messages in this queue.

        user - > select user account(
        consumer_group ->
        topicname -> employee.dev
        role ->producer.


        Add ACL ->consumer //to consume messages in this queue.

        user - > select user account(
        consumer_group ->
        topicname -> employee.dev
        role ->producer.
