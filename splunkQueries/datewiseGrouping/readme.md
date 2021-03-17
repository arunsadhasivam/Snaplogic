To group all records based on start and end date:
=================================================


    if eventstats is used provide additional layer where we can store and retrieve and add to another stats.
    
 stats:
 ======
 
  similar to SQL aggregation. If the stats command is used without a BY clause, only one row is returned,
 which is the aggregation over the entire incoming result set. If a BY clause is used, one row is returned for each distinct 
value in the field specified in the BY clause.


    
 **Eventstats**:
 ================
 
    Generates summary statistics from fields in your events and saves those **statistics into a new field**. 
   The eventstats command places the generated statistics in new field that is added to the original raw events.


    Let's start by creating a set of four events by using a dataset literal.
e.g:
=====

      | from [{"age":25, "city": "San Francisco"}, {"age": 39, "city": "Seattle"}, {"age":31, "city": "San Francisco"}, {"city": "Seattle"}]
      | streamstats count()


Note:
====
    
    if you use stats that is the response and you cannot process anything after **stats**. but through "**eventstats**" we can process further
    
 

      <<search-index>> "Logger - Published Message" 
      | eval msgArray = split(msg, ",")
      | eval uniqueId=mvindex(msgArray,2) | eval emp_id = replace(uniqueId, "emp_id=", "")
      | eval source_name=mvindex(msgArray,1)
      | eventstats min(_time) AS start_time, max(_time) AS end_time by source_name //add additional layer or add result to newfields 
      | eval start_time =strftime(start_time,"%Y-%m-%d %I:%M:%S.%3N")
      | eval end_time=strftime(end_time,"%Y-%m-%d %I:%M:%S.%3N")
      |table start_time,end_time,emp_id,source_name                           
      | stats count(emp_id) as count by source_name,emp_id,start_time,end_time
