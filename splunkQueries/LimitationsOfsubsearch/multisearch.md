Multisearch:
============

The multisearch command is a generating command that runs multiple streaming searches at the same time.
 This command requires at least two subsearches and allows only streaming operations in each subsearch.
 Examples of streaming searches include searches with the following commands: search, eval, where, fields, and rex.
 For more information, see Types of commands in the Search Manual.


      | multisearch <subsearch1> <subsearch2> <subsearch3> ...


| multisearch [search index=a | eval type = "foo"] [search index=b | eval mytype = "bar"]

