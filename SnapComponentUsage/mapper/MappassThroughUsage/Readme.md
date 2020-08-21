

      rest1 -> rest2 -> rest3

      if you making 3 call based on input previous you can efficiently make use of pass Through option.

      rest 1                                       |  rest2                              |        rest3
      ========                                     |
      expr                target                     expr                target         |expr                target
      $rest1_input : $rest1_input                 |  $rest2_input        $rest          | $rest3.name       $original.$rest1_input
                                                                                          Date.now()        $oringal.$rest1_input    


      see unless you want to edit the response you can just carry 1->2->3 till you set pass through response from rest1 available in rest3 
      just need to use $original.rest1_input.
      if you want to update some thing you can use $original.rest1_input.start_time, like that use $original to update in between or else just
      carry over and can use whenever you need $original.rest1_input.
      
      
      
      
      
      
      rest 1                           -> map1           ->         rest2->         map 2        - >    rest3          -> map3
      (rest1.input)                 ( $rest1.res)               $rest2.input       $rest2.res          $rest3.input       $rest3.resp
      
      $rest1.input.id
      
      to carry rest1.input to rest4
      ===============================
      
      just check passthrough in map1,map2,map3
      
      in map3 get like $original.rest1
      
      in rest 2 let say update input
      ================================
      
        exp                                            target
        =======================================================
        
        $Date.now()                                    $original.rest1.response.end_time
        $rest1finished:                                 $oringal.rest1.response.status
        $rest1.input.start_time-Date.now().getTime()    $orinal.rest1.process_time
        $rest1.input.start_time-Date.now().getTime()    $orinal.rest1.process_time
        
        
      in rest 3 also check the values
      =================================
        
        exp                            target
         
        $orginal.rest1.input1.id     $rest3.input.firstId
       

      
