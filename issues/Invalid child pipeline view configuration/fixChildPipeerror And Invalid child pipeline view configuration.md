ISSUE:
======

1)
if we add child pipeline to main pipeline and let say return failure payload , success payload separately. it will throw error.

2) Also if we stop pipeline execution in child pipeline in case of failure of below sql connection and sucess flow if in case
if sql works fine and generate result.


Reason
=======

Above 2 cases, so it consider it as 2 flows so it complains "childpipeline should render 1 flow".

even if you put union in this case. it shows "child pipeline is failing, please correct the child pipeline " to continue.



Solution:
========
                                  
   kafka  jms - > mapper-> sql -> maper -> sucesspayload ->
                            |
                            (92)
                                 -(92)mapper->failurepaylod->
                                 
   see 2 flows if sql executes successfully and if fails 2 flows.
   
   to avoid this.

         kafka  jms - > mapper-> sql -> maper -> sucesspayload  -> 
                                |                                     Union -> mapper->payload
                                (92)                               /
                                     -(92)mapper->failurepaylod->              

                   

Error:
=====

com.snaplogic.snap.api.SnapDataException: Invalid child pipeline view configuration
	at com.snaplogic.snaps.flow.PipeExec.process(PipeExec.java:751)
	at com.snaplogic.snaps.flow.PipeExec.processSafely(PipeExec.java:596)
	at com.snaplogic.snaps.flow.PipeExec.execute(PipeExec.java:499)
	at com.snaplogic.snaps.flow.PipeExec.executeForSuggest(PipeExec.java:1484)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.executeSnap(SnapRunnableImpl.java:813)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.executeForSuggest(SnapRunnableImpl.java:662)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.doRun(SnapRunnableImpl.java:871)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.access$000(SnapRunnableImpl.java:121)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl$1.run(SnapRunnableImpl.java:410)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl$1.run(SnapRunnableImpl.java:406)
	at java.security.AccessController.doPrivileged(Native Method)
	at javax.security.auth.Subject.doAs(Subject.java:422)
	at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1657)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.call(SnapRunnableImpl.java:405)
	at com.snaplogic.cc.snap.common.SnapRunnableImpl.call(SnapRunnableImpl.java:121)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Reason: The child pipeline has more than one unlinked output view
Resolution: Remove the extra unlinked output views or use a Union to combine all of the views
