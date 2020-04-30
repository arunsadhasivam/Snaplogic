Union:
======

it merge 2 documents so both exist. 
NOTE:
=====

when processing array using json-splitter better use Join when you want to merge 2 input like token from different
output and mapper from copy empid it is better to go with join.


      copy-> rest -> mapper(empid) -> mapper->join->mapper_join_token_Empid(token,empid)
      |
      token


if union is  used it creates 2 record one for token and for empid so in interates 1 iterates it add {token"12345",empid:null}
and 2 record it has {token:null, empid:"12345"}

    mapper_join_token_Empid has 2 records when union used.
    ======================================================
    {token"12345",empid:null}
    {token:null, empid:"12345"}

    in case of array if you use union it creates 2 record for every record.since 
    {"token":"12345"}
    {"empId":"123"}


    mapper_join_token_Empid has 2 records when join used.
    ======================================================
    single record only in join
    
    {"token":"12345", "empID":"123"}



Join:
=========

in join inner 1-1 it create one only.

{
  "token":"12345",
  "empId":"123"
}
