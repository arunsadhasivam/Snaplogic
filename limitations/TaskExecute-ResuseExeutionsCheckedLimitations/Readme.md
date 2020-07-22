Reuse executions to process documents
======================================

if it is checked, then join wont work in child pipeline. it shows concurrent threading latch expection

com.snaplogic.cc.snap.common.ThreadDetails: prio=4 Id=2588720 TIMED_WAITING on java.util.concurrent.CountDownLatch$Sync@1da65d47
	at java.base@11.0.5/jdk.internal.misc.Unsafe.park(Native Method)
	-  waiting on java.util.concurrent.CountDownLatch$Sync@1da65d47
	at java.base@
