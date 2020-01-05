// Ensure compatibility with both JDK 7 and 8 JSR-223 Script Engines
try { load("nashorn:mozilla_compat.js"); } catch(e) { }

// Import the interface required by the Script snap.
importPackage(com.snaplogic.scripting.language);

// Import the Java utility classes.
importPackage(java.util);

/**
 * Create an object that implements the methods defined by the "ScriptHook"
 * interface.  We'll be passing this object to the constructor for the
 * ScriptHook interface.
 */
var impl = {
    /*
     * These variables (input, output, error, log) are defined by the
     * ExecuteScript snap when evaluating this script.
     */
    input : input,
    output : output,
    error : error,
    log : log,

    /**
     * The "execute()" method is called once when the pipeline is started
     * and allowed to process its inputs or just send data to its outputs.
     *
     * Exceptions are automatically caught and sent to the error view.
     */
    execute : function () {
       this.log.info("Executing Transform Script");
       
       var inputList = new java.util.ArrayList();
        var wrapper = new java.util.HashMap();
        var root = {};
        wrapper.put("payload", root);
        root.inputList= new java.util.ArrayList();
        while (this.input.hasNext()) {
            try{
                // Read the next document, wrap it in a map and write out the wrapper
                var doc = this.input.next();
                root.inputList.add(doc);
            }
            catch(err) {
                var wrapper = new java.util.HashMap();
                wrapper.put("errorMsg", err);
                this.log.error(err);
                this.error.write(wrapper);
            }
        }
        
        this.output.write(root, wrapper);
    }
};

/**
 * The Script Snap will look for a ScriptHook object in the "hook"
 * variable.  The snap will then call the hook's "execute" method.
 */
var hook = new com.snaplogic.scripting.language.ScriptHook(impl);
