

   pipelineparameter : _allowedNulls

                                             --------- Mapperallownull----------------------------
                                            /                                                      \ ___  Map Result -> join(merge)->
           mapper->    mapper1 -> Router ----                                                      /     
         contact :$                         \__________ Mapper-removenulls -> mapper add toResult






       mapper1
       ========

          source                                                              | target
          ------------------------------------------------------------------------------

          $.filter((value, key) => _allowedNulls.split(",").indexOf(key)!=-1) : $allowednulls 
          $.filter((value, key) => _allowedNulls.split(",").indexOf(key)==-1) : $not_allowed_nulls

       Router:
       =======

          source      | target
          ----------------------

           condition 1 : $allowed_nulls!=null     
           condition 2 : $not_allowed_nulls!=null


       Mapperallownull
       =================

         source      | target
        ----------------------
         $allowed_nulls : $


       mapper-removenulls
       ===================


          source                                                                          | target
          -------------------------------------------------------------------------------------------------------------

        $..[?(value == null || (value instanceof Object && value.isEmpty())
             || (value instanceof Array && value.length == 0) )] :                       | empty target path


        target should be empty so that all nulls will be cleared.


        mapper add toResult
        ====================


        source              | target
        --------------------------------

         $not_allowed_nulls : $

          join Merge
          ==========

          merge will merge allowednulls and not_allowednulls as you can see both target to $.



