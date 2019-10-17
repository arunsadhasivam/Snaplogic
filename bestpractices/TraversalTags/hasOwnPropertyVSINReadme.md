hasOwnProperty
==============


$.hasOwnProperty('$.child.value') // Generates warning

 // No warning, use if '$child' is not guaranteed to exist
 
 
 IN Operator:
 ==============
 
 
('child' in $) && ('value' in $child)
 // No warning and '$child' is always expected to be there
'value' in $child
