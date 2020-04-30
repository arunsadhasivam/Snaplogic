1)input payload is

flow:
======

jsongenerator-> mapper

"request":{
    "start":2020-1-1,
    "end":2020-2-1
}


to change the json generator static message to make it dynamically today date -1 
order:
  

mapper:
=======
  
  $request : $request
  Date.now().minusDays(1).toLocaleDateString() ->$request.start
  Date.now().minusDays(1).toLocaleDateString() ->$request.end
  response:
  
  "request":{
       "start":current_date,
       "end":current_date
       }
  if order changed then like if reques
  Date.now().minusDays(1).toLocaleDateString() ->$request.start
  Date.now().minusDays(1).toLocaleDateString() ->$request.end
  $request : $request
  
  then original message will only return no change
  
