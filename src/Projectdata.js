const http=require('https')
var url = 'https://api.github.com/users/surajpanker/repos';
const fs = require('fs')

'use strict';
var request = require('request');

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
    //  const arr = JSON.parse(data)
      const arr=[];
      for(let i=0;i<data.length;i++){
        const {node_id , name ,created_at ,url,description,language } =data[i];
        let createdAt=created_at;
        let languages= language;
        let id =node_id;
        const customer = {
            id  , name ,createdAt ,url,description,languages}
        let  a = JSON.stringify(customer)
      console.log(a)
        
 }
       for(let i=0;i<data.length;i++){

      
       }
    }
});