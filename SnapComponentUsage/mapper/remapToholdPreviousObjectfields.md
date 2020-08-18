you can avoid passthrough in mapper but if you dont add previous global every thing lost

e.g 

rest-> mapper                  -> childpipeline ->    mapper        -> mapper(response)
      {tracking_unique_id                              {tracking.end_time-tracking.start_time = tracking.response_time} 
      tracking.emp_id
      tracking.start_time
      tracking.end_time}


To remap

         expression                                | target
         ===================================================
         $tracking                                 | $tracking( important else all other fields lost) if passthrough not enabled
         $tracking.end_time-tracking.start_time    | $tracking.response_time
