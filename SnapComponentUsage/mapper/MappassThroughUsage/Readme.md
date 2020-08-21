

      rest1 -> rest2 -> rest3

      if you making 3 call based on input previous you can efficiently make use of pass Through option.

      rest 1                                       |  rest2                              |        rest3
      ========                                     |
      expr                target                     expr                target         |expr                target
      $rest1_input : $rest1_input                 |  $rest2_input        $rest          | $rest3.name       $original.$rest1_input
                                                                                          Date.now()        $oringal.$rest1_input    


      see unless you want to edit the response you can just carry 1->2->3 till you set pass through 
      response from rest1 available in rest3       just need to use $original.rest1_input.
      if you want to update some thing intermediate i.e in between rest1 to rest3, you can use $original.rest1_input.start_time,
       like that use   $original to update in between or else just  carry over and can use whenever you need $original.rest1_input.
      
           better to use  like in $rest2 
           ===============================
           
           "processed rest1"                      $original.rest1_input.status.
            Date.now()                            $original.rest1_input.endTime
            Date.now()-rest1.start_time()         $original.rest1_input.endTime
            
            
            VS  


            this way  3 step process as you can need temp variable and then change 
            =========================================================================
            
            
                  3 Step Process:
                  ===============
                  1) create temp variable  $original.rest1_input    $rest1_input
                  2) set values like below
                  3) need to clear the $original else duplicate fields exists i.e along with $tracking $original.tracking also exists.
            
            
             in rest 2 do 
             $original.rest1_input    $rest1_input ( temp variable)
             "processed rest1"                      $rest1_input.status.
              Date.now()                            $rest1_input.endTime
              Date.now()-rest1.start_time()         $rest1_input.endTime
              $original                              //clear the original
              
              
              since as you can see if you need any update you can update to $original instance .
            
             

            

           
           instead
      
      
      
      
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
       
       
       IMPORTANT:
       ===========
       
       
       Make sure clear the $original object finally 
       
       let say you can carry the object from rest1 -> rest3 and we have map1 -> rest1 ,map2->rest2, map3->res3
       after rest3 we dont want passthrough means  uncheck pass through in map3
       
       
       
       In map3 set all values need for the rest 4
       ===========================================
          
        Map configuration 
        ===================
        
          Expression 
           
          $original.rest1.id           $rest1.id 
          $original.rest3.response     $rest3.response  
          $ response                    ""
          
          
          so response which gets accumulated previously in map1 (rest1) , map2 (rest2) gets cleared in map3 (rest3)
            since passthrough unchecked in map3 and wont carry forward  to rest4(map4). but since we manually set  $original.rest1.id  
            and $original.rest3.response in map3 (rest3) will only carry forward to map4(rest4) .
            rest2.response ,rest1.responsetime, rest2.input all gets cleared.
       
       
       NOTE:
       =======
       Also Aware that if multiple child pipeline in between rest1 , rest3
       
       let say in rest1 we have 2 child pipeline  after 2 child pipeline when we try to get 
       it become like $original.$original.rest1_input.

      
