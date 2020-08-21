

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
