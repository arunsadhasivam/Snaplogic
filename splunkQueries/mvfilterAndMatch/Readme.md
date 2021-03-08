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

index=ips_snaplogic_np AdobeStage "Enterprise Marketing" "CRM_ACCOUNT"  "z_postToMarketo" "PAYLOAD"| eval msgArray = split(msg, ",") 		
|eval input = mvindex(msgArray,6)		
|eval result =mvfilter(match(msg,"danforth@adobe.com.invalid"))| where len(result)>0 | table result		
![image](https://user-images.githubusercontent.com/2921098/110288822-68d03280-7f9d-11eb-926f-904cc886b6f9.png)

  index=<<search index>> 
  |eval msgArray = split(msg, ",")
  | rex field=msg "\"EmpID\":\"(?<EmpID>[^,]*)\","
  | eval email =mvfilter(match(msg,"test@gmail.com"))| where len(result)>0 | table result		
  
  
  output:
  =======
  
  /msg : "input : message = "employee details", Country="US",Location="Test", 
        response = { "EmpName:"Test", "EmpID":"1001","address":"Test","email":"test@gmail.com" }
    
  
  
