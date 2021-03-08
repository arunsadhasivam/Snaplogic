To search in particular msg key value pair in middle of msg using regex:
=============================================================================


payload:

  /msg : "input : message = "employee details", response = { "EmpName:"Test", "EmpID":"1001" }
  /msg : "input : message = "employee details", response = { "EmpName:"Test", "EmpID":"1002" }
  /msg : "input : message = "employee details", response = { "EmpName:"Test", "EmpID":"1003" }
  

      index=<<search index>> 
      |eval msgArray = split(msg, ",")
      | rex field=msg "\"EmpID\":\"(?<EmpID>[^,]*)\","
      | where source_name  like "%IDS_%" 
      | table message_unique_id


output:
======

  1001
  1002
  1003
  
