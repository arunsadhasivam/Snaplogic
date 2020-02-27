1) when a consumer with below setting should be ultra task to work.

        partition : empty
        seektype : End
        offset: empty
        messagecount: -1
        AutoResetOffset:Latest
        keydeserializer:string
        valuedeserializer:JSON
        
2)if run manually with partition empty wont work.       



Also Ultra task wont support 

UltraTask wont support:
=======================

when running a pipeline as ultratask groupby, groupBy N, aggregate wont work directly.
need to call in child pipeline only.


Reference:
===========

https://community.snaplogic.com/t/merge-documents-into-one-big-document/1312/3


Try moving that group by N to a child pipeline and see how it works for Ultra.

Most of the snaps (group by, group By N, aggregate snaps) work in child pipelines in Ultra mode as
long as you return one document to the top level parent pipeline.

