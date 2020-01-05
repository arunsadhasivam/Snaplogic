To Add a root to result.

if you have result

        {"id:1,"name":"test"},
        {"id:1,"name":"test"},
        {"id:1,"name":"test"},
        {"id:1,"name":"test"},
        {"id:1,"name":"test"},

and you want to prefix with 

    payload{
      input[
      ]
    }

Result:
=======
        payload{
          input[
            {"id:1,"name":"test"},
            {"id:1,"name":"test"},
            {"id:1,"name":"test"},
            {"id:1,"name":"test"},
            {"id:1,"name":"test"},
          ]
        }
        
        
        
        
