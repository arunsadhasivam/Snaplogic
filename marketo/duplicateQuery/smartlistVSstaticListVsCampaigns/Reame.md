Smartlist :
===========

you can use smartlist to get all duplicates like (duplicate Fields- <<field name>>)



program with smartlist is marketo api will provide the bulk export api 
1) step 1: /bulk/v1/leads/export/create.json to create download request.
2) step 2: queue download request using marketoUri /bulk/v1/leads/export/$exportId/enqueue.json?access_token="+$access_token to enquue request
3) step 3: download /bulk/v1/leads/export/921f7f94-9f8b-4b52-830a-c0545969c1df/file.json?



  {{marketo_url}/entity/oauth/token?grant_type=client_credentials&client_id={{marketo_client_id}}&client_secret={{marketo_client_secret}}
  {{marketo_url}}/bulk/v1/leads/export/create.json?access_token=17ab5d3c-6bf4-4033-8ab9-796e9bc99ac3:ab
  {{marketo_url}}/bulk/v1/leads/export.json?access_token=7857f25d-fc4e-4499-8166-7367ae6638d0:ab&status=Completed,Failed
  {{marketo_url}}/bulk/v1/leads/export/921f7f94-9f8b-4b52-830a-c0545969c1df/enqueue.json?access_token=7857f25d-fc4e-4499-8166-7367ae6638d0:ab
  {{marketo_url}}/bulk/v1/leads/export/921f7f94-9f8b-4b52-830a-c0545969c1df/status.json?access_token=7857f25d-fc4e-4499-8166-7367ae6638d0:ab
  {{marketo_url}}/bulk/v1/leads/export/921f7f94-9f8b-4b52-830a-c0545969c1df/file.json?access_token=7857f25d-fc4e-4499-8166-7367ae6638d0:ab


staticlist:
===========

you can get the entire list in one api {{marketo_url}}/rest/asset/v1/staticList/byName.json and then  retrieve id , 
then use the id below
{{marketo_url}}/rest/v1/list/{id}/leads.json?access_token=fa56afee-1097-4f3d-b0a0-dd8d24fe1bc3:ab&fields=

IMPORTANT:
==========

static list by default if try to upload some records, it wont accept duplicates , need to push through smart campaign.

Smart Campaign:
===============

NOTE:
=====
      "you can use static list & smart list "
  
  
Smart Campaign allows to run the campaign and populate the static list , advantage is it allows duplicates


steps : marketo > marketo Activities> create smart Campaign >create a separate folder

3 steps process in smart campaign

1) create a smartlist  , in the case of retrieve duplicate you can select email address, (Duplicate Fields - email)
2) create a flow , you can choose (ADD TO LIst) you can create a smart list before that name DUPLICATE_EMAIL_ADDRESS and then
   in the flow ADD TO LIST give the static list name. 
3) create a schedule when to run , it runs campaign and then populate the static list. so through campaign you can make advantage
of smartlist and static list and then use it.so you can scheudle every day to run the campaign and then populate the static list by
using smart list (Duplicate Fields -Email). so now statlist automatically gets updated and also retrieve through api is also easy.
