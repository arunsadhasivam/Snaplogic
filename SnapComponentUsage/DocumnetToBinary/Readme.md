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

      {
        employee:"",
        id :"",
        desc:""
      }

JSON formatter:
===============

      if JSON formatter is used it becomes.

      [{
        employee:"",
        id :"",
        desc:""
      }]



