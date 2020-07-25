    1) if ultra pipeline is used you cannot have head,tail in mail pipeline.
        but you can have head,tail in child pipeline.
    2) if ultra pipeline is used and if pipeline execute has "Reuse executions to process documents	" is enabled then
          child pipeline also should be ultra compatible. i.e child pipeline also
          should not have head, tail.

      
    Reuse executions to process documents	
    ======================================

        This flag specifies the execution mode to use. When enabled, the Snap starts a child execution and passes multiple 
        inputs to the Pipeline.Reusable executions continue to live until all of the input documents to this Snap have been 
        fully processed.

        If this flag is not enabled, then a new Pipeline execution is created for each input document.  



        Pipeline parameter values can only be changed if this flag is not enabled. In other words, reusable executions cannot have different 
        Pipeline parameter values for different documents.

    Ultra Mode Compatibility
    =========================

        If reuse is enabled and this Snap is used in an Ultra Pipeline, then the Snaps in the child Pipeline must also be Ultra-compatible.

        If you need to use Snaps that are not Ultra-compatible in an Ultra Pipeline, you can create a child Pipeline 
        with those Snaps and use a Pipeline Execute Snap with reuse disabled to invoke the Pipeline. Since the child Pipeline is 
        executed for every input document, 
        the Ultra Pipeline restrictions do not apply. 

        For example, if you want to run an SQL Select operation on a table that would return more than one document, you can put a
        Select Snap followed by a Group By N Snap with the group size set to zero in a child Pipeline. In that configuration,                                                             the child Pipeline is executed, performs the select operation, and then the Group By Snap gathers all of the outputs into a
        single document or binary data.That single output document or binary data can then be used as the output of the Ultra Pipeline.

    Default value: 
    =============
                Not selected


