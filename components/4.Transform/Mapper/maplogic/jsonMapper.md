To check below json tag in filter before doing mapping


    [
    {
     "employeeid":1,
     "experience": "{ "asintern":{"coreexperience":{"overall":12}}}
    }
    ]

filter
=======
    $.hasOwnProperty("Text") && $.experience.length>0 && 'experience' in $ && 'asintern' in JSON.parse($experience)
    && 'coreexperience' in JSON.parse($experience)['asintern'] 
    && 'overall' in JSON.parse($experience)['asintern']['coreexperience']
