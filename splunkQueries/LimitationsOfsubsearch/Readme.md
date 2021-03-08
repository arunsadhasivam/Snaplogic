Subsearch:
=============
- subsearch start with search keyword.
- note subsearch usually starts with subsearch than main search.



subsearch :
============

      index=main sourcetype=access_combined_wcookie
      [ search index=main sourcetype="access_combined_wcookie"
      action=purchase
      | stats count by productId
      | sort 1 count
      | fields productId ]

    - inner search (subsearch) enclosed in []
    - outer search (main search) retrieves all events


other subsearch commands:
==========================

    - join,append,appendpipe,appendcols

Limitations:
===============

  -First, there is a limit in the number of results a subsearch can handle. By default, the
   limit is 10,000. After this limit, the results are truncated, so there is a potential for the
   outer search to be inaccurate.

  -Second, there is a time limit on how long a subsearch can run. By default, this limit is
    60 seconds.
