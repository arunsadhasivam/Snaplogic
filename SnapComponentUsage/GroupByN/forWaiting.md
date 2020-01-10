

ISSUE:
if we add child pipeline to main pipeline and let say return failure payload , success payload separately. it will throw error.

Also if we stop pipeline execution in child pipeline in case of failure of below sql connection and sucess flow if in case if sql works fine and generate result.
Reason
Above 2 cases, so it consider it as 2 flows so it complains "childpipeline should render 1 flow".

even if you put union in this case. it shows "child pipeline is failing, please correct the child pipeline " to continue.

Solution:
kafka jms - > mapper-> sql -> maper -> sucesspayload -> | (92) -(92)mapper->failurepaylod->

see 2 flows if sql executes successfully and if fails 2 flows.

to avoid this.

     kafka  jms - > mapper-> sql -> maper -> sucesspayload  -> 
                            |                                     Union -> mapper->payload
                            (92)                               /
                                 -(92)mapper->failurepaylod->    
                                 
                                 

for failure it comes sucess +failure  since it is streaming both will run , if you stop then it creates 2 views above issue.
to solve use group by n. to group the sucesss and failure.

step 1:
=======

do union of success  and failure to merge to 1 view as above.

step2
======
use then group to collect 2 output.since we dont have have group which could collect the 2 output
jsonPath($, "$group[*].success").find(x => x==false)!=null

Reason for using group by N.
============================

 if you dont use groupbyN do not have collection  to use find in collection 
 jsonPath($, "$group[*].success").find(x => x==false)!=null.
 
 Step 3:
 ========
 
 route -jsonPath($, "$group[*].success").find(x => x==false)!=null i.e if it 
 has even 1 failure in collection route to fail. else route to sucess view.
 
 step 4
 ======
 handle the failure payload in the main pipeline.


