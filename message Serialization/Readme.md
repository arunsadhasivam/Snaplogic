

            Update - All of the cases for update can be handled by writing the appropriate JSONPath. For example:
            Update value: target path = $last_name
            Update map: target = $address.first_name
            Update list: target = $names[(value.length)]
            The '(value.length)' evaluates to the current length of the array, so the new value will be placed there at the end.
            Update list of maps: target = $customers[*].first_name
            This translates into "write the value into the 'first_name' field in all elements of the 'customers' array".
            Update list of lists: target = $lists_of_lists[*][(value.length)]
            For performance reasons, the Mapper does not make a copy of any arrays or objects written to the Target Path.
            If you write the same array or object to more than one target path and plan to modify the object, make the copy yourself. 
            For example, given the array "$myarray" and the following mappings:

            $myarray -> $MyArray
            $myarray -> $OtherArray



            Any future changes made to either "$MyArray" or "$OtherArray" are in the both arrays.
            In that case, make a copy of the array as shown below:

            $myarray -> $MyArray
            [].concat($myarray) -> $OtherArray
            The same is true for objects, except you can make a copy using the ".extend()" method as shown below:

            $myobject -> $MyObject
            {}.extend($myobject) -> $OtherObject
