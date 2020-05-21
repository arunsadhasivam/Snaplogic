flow:
=====

below we have 2 flow writetofile success flow and error.both will work parallelly if jsonformattter (property) Format each document
checkbox is not enabled.
                                        errorflow1
                                        |
    getFile->jsonparser->getToken-> executeTask->setrequest

                                                                    union(errorflow1) ->logError->jsonformatter->writetoFile
                                                                    |
                errorflow2                                          errorflow2
                |
    ->mapper->httppost-> mapper callunion1

    ->router(isvaliduser)-> hdfswriter->mapper(call union2)


                                                                     union(writetofile)->mapper->jsonFormatter->writetofile
                                                                      |
                                                                      writtofile1

                                                                          
if jsonformatter property -   Format each document is not checked then    if error is happened like errorflow1 it goes to errorflow1
write to file and then parallely union (writetofile) gets executed.

    union(writetofile)->mapper->jsonFormatter->writetofile
since in this flow above mapper only set values it wont gets called. but directly jsonformatter gets called and override file
with null value.

IMPORTANT:
==========

jsonformatter always formatter each document.
