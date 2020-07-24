Mingling Non-streaming snap component vs Streaming snap component:
====================================================================

In ultra  pipleine if you mingle normal non-stream snaps vs stream snap multithreading issues will occcur.

      filereader->mapper->getTokens-> consumer -> join-> restdelete -> acknowlege -> end
      
      

in this filereader - getting tokens if work on ultra pipeline it will fail since filereader wont run continuously in consumer
if we keep (Message count -l) as kafka setting it will run continuously . so it wont work well.


consumer -> filereader->mapper->getTokens-> join-> restdelete -> acknowlege -> end

getTokens -> is api call to get connection api-token.

Even if you change the pipeline to below it will fail.

To avoid this move getToken in child pipeline it will solve the issue.
