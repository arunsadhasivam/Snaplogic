E.g:
====

      {
          "payload":
          {

          }


          "tracking":{
                "log":{
                }
            }
      }


we want merge tracking inside payload.

        {
          "payload":
            {
              tracking":{
                  "log":{
                  }
              }
            }
        }

      $payload  -> $payload
      $tracking ->  $payload.tracking

ERROR:
=====
      Failure: Failed to serialize document since it may contain a loop, Reason: 
      Failed to serialize document since it may contain a loop


Solution:
========

Expr   Target
==============

    $payload  -> $payload
    JSON.parse(JSON.stringify($tracking)) ->  $payload.tracking
