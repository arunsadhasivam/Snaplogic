Date.now().toLocaleDateTimeString('{\"timeZone\":\"PST\", "format":"MM/dd/yyyy HH:mm:ss.SSS"}')

 
JSON.parse($Text)['employee']['form']['info']

Date.parse($key_value).toString()



Null check:
==========

   !(‘x’ in $)
   (‘x’ in $)

   $.hasOwnProperty('error')

   or
   $.hasPath('error')



log with condition:
=====================

("logger" in $ && "error" in $  &&  "snap_details" in $)?($logger.name + ", " + $logger.source + ", id=" + $logger.id )


if node exists in json:
=======================



if success node not exist in node path it sets to true.

jsonPath($, "$content[0].success",{defaultValue: true})==false
