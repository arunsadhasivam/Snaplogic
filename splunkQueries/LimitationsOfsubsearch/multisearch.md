Multisearch:
============

The multisearch command is a generating command that runs multiple streaming searches at the same time.
 This command requires at least two subsearches and allows only streaming operations in each subsearch.
 Examples of streaming searches include searches with the following commands: search, eval, where, fields, and rex.
 For more information, see Types of commands in the Search Manual.


      | multisearch <subsearch1> <subsearch2> <subsearch3> ...
      
Advantage of multisearch:
============================

With the multisearch command, the events from each subsearch are interleaved. **Therefore the multisearch command is not restricted by the subsearch limitations.
Unlike the append command, the multisearch command does not run the subsearch to completion first**. 
The following subsearch example with the append command is not the same as using the multisearch command.

     index=a | eval type = "foo" | append [search index=b | eval mytype = "bar"]


      

e.g:
====
        | multisearch [search index=a | eval type = "foo"] [search index=b | eval mytype = "bar"]

