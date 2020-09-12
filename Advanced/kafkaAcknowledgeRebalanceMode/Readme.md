1) producer - consumer  works based on 3 ways 
    1) client acknowledgement - 
    2) auto commit (offset)
    3) store the offset in db and persist the last read offset - like read 100 records and 
       persist the offset of 100 th record in the db that the next offset to read is 101 like sequence.nextval in sql.
2) client acknowledgement-
       it works like client first read the message while read kafka connect has timeout in ms before it gets
       acknowledge. let say below producer reads offset (1) and do some processing with having timeout as 310 (ms),
       if it could not able to process the message and acknowledge in 310(ms), consumer since it waits for acknowledge
       it could not gets acknowledgement response in time , it send a rebalance request to rebalance it again reprocess
       the message in offset(1).
       
          producer - > mapper -> restcall -> childpipeline -> Acknowledgement.
        
