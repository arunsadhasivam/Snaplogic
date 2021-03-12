stats
=======


below wont work if more than stats is used.

    index search  =<<search_index>> |
    | eval msgArray = split(msg, ",")
    | eval uniqueId=mvindex(msgArray,2) | eval message_unique_id = replace(uniqueId, "message_unique_id=", "")
    | eval source_name=mvindex(msgArray,1)
    | stats min(_time) AS start_time, max(_time) AS end_time
    | eval start_time =strftime(start_time, "%Y/%m/%d %T.%3Q") 
    | eval end_time=strftime(end_time, "%Y/%m/%d %T.%3Q")
    |table start_time,end_time,message_unique_id,source_name
    | stats count(message_unique_id) as count by source_name,message_unique_id,start_time,end_time



  For example, you have 5 events and 3 of the events have the field you want to aggregate on.
   the eventstats command generates the aggregation based on the data in the 3 events. 
  A new field is added to every event and the aggregation is added to that field in every event.

  With the exception of the count function, when you pair the eventstats command
   with functions that are not applied to specific fields or eval expressions that resolve into fields, 
  the search head processes it as if it were applied to a wildcard for all fields. In other words, when you have |
   eventstats avg in a search, it returns results for | eventstats avg(*).

  This "implicit wildcard" syntax is officially deprecated, however. Make the wildcard explicit. Write | eventstats <function>(*) 
  when you want a function to apply to all possible fields.

Event stats
=============


    index search  =<<search_index>> |
    | eval msgArray = split(msg, ",")
    | eval uniqueId=mvindex(msgArray,2) | eval message_unique_id = replace(uniqueId, "message_unique_id=", "")
    | eval source_name=mvindex(msgArray,1)
    | eventstats min(_time) AS start_time, max(_time) AS end_time //EVENT STATUS only difference line
    | eval start_time =strftime(start_time, "%Y/%m/%d %T.%3Q") 
    | eval end_time=strftime(end_time, "%Y/%m/%d %T.%3Q")
    |table start_time,end_time,message_unique_id,source_name
    | stats count(message_unique_id) as count by source_name,message_unique_id,start_time,end_time

the above works.
