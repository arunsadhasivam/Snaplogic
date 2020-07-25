Mingling Non-streaming snap component vs Streaming snap component:
====================================================================

In ultra  pipleine if you have snap which pulls token and used in rest calls tokens generated in previous
snap , problem is token has TLE (time to live) so by the time it goes consumer read message and use
in rest call it may expire so make sure you use correct place like below

 issue pipeline :
 ================
 
      filereader->mapper->getTokens-> copy->consumer -> mapper(set request)-> join->mapper(setrequest) ->restapicalldelete -> acknowlege -> end
                                      (token)                                (readtoken)    
      
like 

better way to use in pipeline tokens:
=====================================

      consumer -> filereader->mapper->getTokens-> mapper(setrequest)-> restdelete -> acknowlege -> end

getTokens -> put get token in childpipeline persist the token in file, read the file check TLE(time to live for token is valid) if so return 
the token else make a new call persist the token and return.

we can move this as component so using (pipeline Execute ) call the child pipeline and return token from (original.access_token)
since child pipeline return with original.access_token.
