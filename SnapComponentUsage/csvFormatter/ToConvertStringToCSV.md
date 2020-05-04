      {
      "emp_id,name,designation,salary\n 1,test1,ITA,10,000\n2,test2,ITA,60,000\n3,test3,ITA,10,000"
      }


jsonGenerator(abovecontent) ->mapper(mapfield) ->jsonsplitter->mapper(split)->mapper(mapptoFields)->filewriter

      1)mapper(mapfield) - 

                $entity.split('\n')   ->$content
      2) json splitter

               $content[*]
      3) mapper(split)
            $splitValue.split(',') - since jsonsplitter converts to value like 
                  {"splitValue":"emp_id,name,designation,salary"} 
                  {"splitValue":1,test1,ITA,10,000} -$content
                  {"splitValue":2,test2,ITA,60,000}
                   {"splitValue":3,test3,ITA,10,000}

      4) mapper(mapptoFields)    
               $content[0]- id
               $content[1]- name
               $content[2]- salary
               $content[3]- designation
         
