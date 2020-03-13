"payload":
{
    "input":
    [
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      },
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      },
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      } 
    ]
}


json splitter :
===============

$payload.input[*]


    [
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      },
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      },
      {
      "marketourl":"https://localhost:8083/rest/v1/leads/1934/merge.json?access_token=[TOKEN]&leadIds=1934"
      } 
    ]
