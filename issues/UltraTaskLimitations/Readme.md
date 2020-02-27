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


