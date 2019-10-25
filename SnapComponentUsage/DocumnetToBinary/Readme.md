flow
====


Mapper -> DocumentToBinary -> JMSProduce

    -O (mapper) - O (DocumentToBinary) > - > JMSProduce
     
     
     (or)
     
    -O (mapper) - O (JSONFormatter) > - > JMSProduce



Description
===========

Binary To Document:
====================

      BinaryToDocument -> converts the json document to Binary 
       it makes to different document. when send to queue it will 3 separate documents in queue
      {
        employee:"Test1",
        id :"",
        desc:""
      }
      
      
      {
        employee:"Test2",
        id :"",
        desc:""
      }

JSON formatter:
===============

      if JSON formatter is used it becomes.
      basically it consider whole json as one document even it has list of sub document.
      when send to queue it will 1 whole documents in queue instead of 3 separate document.
      [{
        employee:"",
        id :"",
        desc:""
      }
      {
        employee:"employee2",
        id :"",
        desc:""
      }
      ]


      even if list has 1 record it still append with collections like this.
      
      single record:
      ==============
      
      even for single record it adds collection "[]" between documents
       [{
        employee:"",
        id :"",
        desc:""
      }]
      


