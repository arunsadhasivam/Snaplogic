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
        var wrapper = new java.util.HashMap();
        while(this.input.hasNext()){
            var current = this.input.next();
            var payload = current.get('payload');
            var managerList = payload.get('input');//main list
            var len = managerList.size();


            for( i =0;i<len;i++){
                var manager = managerList.get(i);
                var manager_id = manager.get('manager_id');
                var employees = ''; 

                var employeeList = manager.get('subordinates');
                var n = employeeList.size();
                for(j=0;j<n;j++){
                    var cur_employee = employeeList.get(j);
                     var cur_employee_id = cur_employee.get('employee_id');
                     employees+=cur_employee_id+',';
                }
                var index = employees.lastIndexOf(",");
                 employees = employees.slice(0,index);
                 wrapper.put(manager_id,employees);
            }
            
        }
         
        var root ={};
        this.output.write(wrapper);
    }
};

/**
 * The Script Snap will look for a ScriptHook object in the "hook"
 * variable.  The snap will then call the hook's "execute" method.
 */
var hook = new com.snaplogic.scripting.language.ScriptHook(impl);
