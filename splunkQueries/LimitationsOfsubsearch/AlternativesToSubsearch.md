https://community.splunk.com/t5/Splunk-Search/Is-there-an-alternative-to-subsearch-or-a-way-to-raise-the/m-p/121586



Yes, there are often ways to get around using subsearches. I try to avoid subsearches both because of the limitations and because they are relatively slow.
 I also find that people with a database background (like me) tend to jump to subsearches when they really aren't necessary in Splunk. For example, your search can be done, 
I think, with this:


    index=ind (source=src1.log OR source=src2.log or source=src3.log)
    | eventstats count(eval(source=="src2.log")) as src2Count   count(eval(source=="src1.log")) as src1Count by FIELD
    | where src2Count > 0 AND src1Count > 0 AND source!=src2.log
    | eval src1_Time = if(source=="src1.log",_time,null())
    | eval src3_Time = if(source=="src3.log",_time,null())
    | stats latest(src1_time) as latest_src1  earliest(src3_time) as earliest_src3  
            count(isnotnull(src1_Time)) as src1Count   count(isnotnull(src3_Time)) as src3Count by FIELD
    | where latest_src1 < earliest_src3 AND src1Count > 0 AND src3Count > 0
