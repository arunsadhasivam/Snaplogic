

when doing grouping
===================

Bad design:
============

        hive db - > copy ->map fields ->  group 300 -> mapper -> join -> publish to destination -> Logger-write offset log ->end
                     |                                           ^
                      -----------> head -> trackinginfo --------/
                

Big problem with above design it holds all records say 1 million records so after 1 million records completed then only it join and
publish to destination . if it fails due to connection then say it read 90 lakhs so all 90 lakhs fails and then start from begining

Flows:
=======

    Above will do:

      1) read records from db.
      2) map fields
      3) group 300
      4) join records
      5) go back records next 300 records till 1 million records fetched
      6) publish /commit 1 million records to publisher destination queue.



Good Design:
===========
               

        hive db - > copy  map fields ->  group 300 -> set tracking -> publish to destination ->  Logger-join write offset log ->end
                     |                                                                             ^
                     -----------------------------------------------------------------------------/



Above thing records records from db 


Flows:
=======

    Above will do:

      1) read records from db.
      2) map fields
      3) group 300
      4) publish 300 to destination queue.
      5) go back records next 300 records till 1 million records fetched
      4) join 1 million records in the log.
      
