
sample payload:
================

    /msg : "input : message = "employee details", Country="US",Location="Test", 
        response = { "EmpName:"Test1", "EmpID":"1001","address":"Test Address1",email="test1@gmail.com" }
    /msg : "input : message = "employee details", Country="US",Location="Test",
        response = { "EmpName:"Test2", "EmpID":"1002","address":"Test Address2",email="test1@gmail.com" }
    /msg : "input : message = "employee details",Country="US",Location="Test", 
        response = { "EmpName:"Test3", "EmpID":"1003","address":"Test Address3",email="test1@gmail.com" }

command:
=========

      index=<<search index>> 
      |eval msgArray = split(msg, ",")
      rex field=msg "\{(?<phrase>[^<]+)\}" | eval _raw = phrase | extract kvdelim=":" pairdelim="," 
      | where source_name  like "%IDS_%" 
      | table EmpName,EmpID,address


Output:
=======

          EmpName| EmpId| address
          =============================
          Test1  |1001  | Test Address1
          Test2  |1002  | Test Address2
          Test3  |1003  | Test Address3
