
usecase:
=========

convert the above result "string" object to csv by mapping to diff column
json input:
===========

      {
      "emp_id,name,designation,salary\n 1,test1,ITA,10,000\n2,test2,ITA,60,000\n3,test3,ITA,10,000"
      }

flow:
======

      jsonGenerator(abovecontent) ->mapper(mapfield) ->jsonsplitter->mapper(split)->
                        ->mapper(mapptoFields)->CSV Formatter->filewriter


component:
==========

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
               1-name 2-designation
               $content[3]- salary
     5) csv formatter
                 just dont change anything in csv formatter drag & drop.
                 
      6)filewriter : just give the name of the file      
                  just disable write header since you give as single string, no separate header field .
