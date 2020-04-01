
query to get the count of processed Records:
=============================================

index="test" "Stage" "Account" 
"z_pushCRMAccount"
"LogAccountCreation"| eval msgArray = split(msg, ",")
|eval account=msgArray|eval account=mvindex(msgArray, 3)
| table account|stats count(account) as count by account
