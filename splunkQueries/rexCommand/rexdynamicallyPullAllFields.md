rex field=msg "\{(?<phrase>[^<]+)\}" | eval _raw = phrase | extract kvdelim=":" pairdelim="," 
