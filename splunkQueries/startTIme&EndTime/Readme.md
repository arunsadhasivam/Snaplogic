To add start and end time of message:
======================================


      index=<<search index>>| eval msgArray = split(msg, ",")
      | eval uniqueId=mvindex(msgArray,2) | eval emp_id = replace(uniqueId, "emp_id=", "")
      | stats min(_time) AS start_time, max(_time) AS end_time
      | eval start_time =strftime(start_time, "%Y/%m/%d %T.%3Q") 
      | eval end_time=strftime(end_time, "%Y/%m/%d %T.%3Q")
      |table start_time,end_time,emp_id
      |appendcols[
        search index=<<search_index>> | eval msgArray = split(msg, ",")
        | eval uniqueId=mvindex(msgArray,2) | eval emp_id = replace(uniqueId, "emp_id=", "")
        |eval source_name=mvindex(msgArray,1)
        | table start_time,end_time,source_name,dedup emp_id 
        | stats count(emp_id) as count by source_name,emp_id
      ]
