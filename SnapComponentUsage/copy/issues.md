flow:
=====

    getexportId (mapper) -> getToken(taskexecute)->copy->http post-> | -map1(token) union->mapper->logerror | -map2(token)

                                                                              |-error
      ->mapper-> join->http post-> filewriter(writeResponse)->file reader->hdfswrite()->join->
                   |                                                                     |
                  map1(token)                                                       map2(token)


in this copy is executed it parallel run map1 destination & map2 destination if any map key dont exist possibility throw error.

so use copy only little before not use copy in begining and then use 3 to 5 copy to all places whereever needed.

design change to avoid issue:
===============================

  getexportId (mapper) -> getToken(taskexecute)->copy->http post-> | -map1(token) union->mapper->logerror (removed 1 copy map2)

                                                                            |-error
    ->mapper-> join->http post->copy-> filewriter(writeResponse)->file reader->hdfswrite()->join->filewrite of status
                 |                 |                                                         |
                map1(token)        map2(token                                             map2(token)
