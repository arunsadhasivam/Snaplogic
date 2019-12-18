To Copy join 
=============

if you have logger in the start and in between we have json splitter which splits  document 
if you have given Json Path* as some json tag.the logger object in the starting gets cleared. so 
you can use copy to preserve or act as a global variable and use join to merge the input

below you have logger at the front a


copy you have have one copy to copy to start and end logger using join.

join -> left(1 ) right(1) inner join

        jsonGenerator->mapper(initlogger) -> copy- jsonsplitter-> mapper -> mapper->start->encrypt-> json spliter ->end logger
                                                |                                   |(logger)                       |
                                                mapper(add fields to copy)111      join(111connector)              join(222connector)
                                                +logger                               1->input->1
                                                mapper(add fields to copy)222

