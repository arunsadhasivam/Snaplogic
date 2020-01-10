if the 


kafka -> db-> error->mapper-> 

if more than 5 rows and if it has error 5 rows it shows as error


     {
    error:"sql syntax exeception  column employee_id does not exist"
    }
    {

    error:"sql syntax exeception column employee_id does not exist"
    }
    {

    error:"sql syntax exeception  column employee_id does not exist"
    }
    {

    error:"sql syntax exeception  column employee_id does not exist"
    }
  
  To avoid use head 
  =================
  
  It is top 1  in sql.
  
  e.g : select top 1 * from employee  will return top 1 records head behaves same way.
  
  it gives compromise of 1 error although all shows same error.
  
   {

    error:"sql syntax exeception-  column employee_id does not exist"
    }
  
