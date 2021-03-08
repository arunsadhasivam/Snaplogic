To search in particular msg key value pair in middle of msg using regex:
=============================================================================


sample payload:
================

    /msg : "input : message = "employee details", Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1001","address":"Test" }
    /msg : "input : message = "employee details", Country="US",Location="Test",
        response = { "EmpName:"Test", "EmpID":"1002","address":"Test" }
    /msg : "input : message = "employee details",Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1003","address":"Test" }

command:
=========

      index=<<search index>> 
      |eval msgArray = split(msg, ",")
      | rex field=msg "\"EmpID\":\"(?<EmpID>[^,]*)\","
      | where source_name  like "%IDS_%" 
      | table message_unique_id
      
      
  NOTE:
  =====
        
        | rex field=msg "\"EmpID\":\"(?<EmpID>[^,]*)\","
           msg  is message input to search. 


output:
======

  1001
  1002
  1003
  
