
dedup:
=======

syntax : dedup <<field>>


query:
======

index="index" 
"process_Employee" AND "EMPLOYEE_VALIDATION"
"Events: [Event_Subtype__c]" | rex field=_raw "error in update on row 0; (?<sfdc_error_code>[^,]*), (?<sfdc_error_desc>[^,]*), 
Employee_Id=(?<employee_id>[^,]*)" | table employee_id | dedup employee_id
