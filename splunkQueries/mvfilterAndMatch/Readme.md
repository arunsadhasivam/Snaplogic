To search and filter the input payload:
=======================================



input payload:
===============

    /msg : "input : message = "employee details", Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1001","address":"Test","email":"test@gmail.com" }
    /msg : "input : message = "employee details", Country="US",Location="Test",
        response = { "EmpName:"Test", "EmpID":"1002","address":"Test" ,"email":"test@gmail1.com"}
    /msg : "input : message = "employee details",Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1003","address":"Test" ,"email":"test@gmail3.com"}



command:
=========

  index=<<search index>> 
  |eval msgArray = split(msg, ",")
  | rex field=msg "\"EmpID\":\"(?<EmpID>[^,]*)\","
  | eval email =mvfilter(match(msg,"test@gmail.com"))| where len(result)>0 | table result		
  
  
  output:
  =======
  
    /msg : "input : message = "employee details", Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1001","address":"Test","email":"test@gmail.com" }
    
  
  
