1) producer - consumer  works based on 3 ways 
    1) client acknowledgement - 
    2) auto commit (offset)
    3) store the offset in db and persist the last read offset - like read 100 records and 
       persist the offset of 100 th record in the db that the next offset to read is 101 like sequence.nextval in sql.


1) client acknowledgement-
==========================
       it works like client first read the message while read kafka consumer has timeout in ms config settings before it gets
       acknowledge. let say below producer reads offset (1) and do some processing by having timeout as 310 (ms) in config,
       if it could not able to process the message and acknowledge in 310(ms). consumer since it waits for acknowledgement,
       if it could not gets acknowledgement response in time , it send a rebalance request to rebalance the server.it again reprocess
       the message in offset(1).
       
          producer - > mapper -> restcall -> childpipeline -> Acknowledgement.
        
