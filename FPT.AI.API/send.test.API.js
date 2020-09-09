const base64 = require('base-64');
const request = require("request");
const rq = require('request');
const { json } = require('body-parser');

exports.sendTestAPI = (question,sender_id,current_test_Number,Made,token) =>{
    return promise = new Promise((resolve,reject)=>{
        let payLoad_A = base64.encode(JSON.stringify({
          "set_attributes": {
            "question_id": question.ID.toString(),
            "user_answer": "A",
            "current_test_ID": current_test_Number.toString(),
            "token": token,
            "MaDe":Made
          }
         }));
        let payLoad_B = base64.encode(JSON.stringify({
          "set_attributes": {
            "question_id": question.ID.toString(),
            "user_answer": "B",
            "current_test_ID": current_test_Number.toString(),
            "token": token,
            "MaDe":Made
          }
         }));
        let payLoad_C = base64.encode(JSON.stringify({
          "set_attributes": {
            "question_id": question.ID.toString(),
            "user_answer": "C",
            "current_test_ID": current_test_Number.toString(),
            "token": token,
            "MaDe":Made
          }
         }));
        let bd = {
            "messages": [
              {
                "content": {
                  "text": question.Content + "\nA: " + question.A + "\n" + "\nB: " +  question.B + "\n" + "\nC: " + question.C + "\n",
                   "buttons": [
                    {
                      "title": "A",
                      "payload": "tra loi test#"+payLoad_A,
                    },
                    {
                      "title": "B",
                      "payload": "tra loi test#" + payLoad_B,
                    },
                    {
                      "title": "C",
                      "payload": "tra loi test#" + payLoad_C,
                    }
                  ]
                },
                "type": "text"
              }
            ],
            "app_code": "29f99d161e92403b5041cfe94dc12141",
            "sender_id": sender_id,
            "channel": "facebook"
          }
        let options = {
            url: 'https://bot.fpt.ai/api/send_messages/',
            method: 'POST',
            headers: {
                'Authorization': "Bearer 709b29e2e946ed3f87edfe2a7c2503da",
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            body: JSON.stringify(bd)
        }
        rq(options,function(err, response, body) {
            if(err) reject(err);
            else resolve(1);
        });
    });
}
exports.sendScore = (sender_id,score,toalQuestion) =>{
  return promise = new Promise((resolve,reject)=>{
  let bd = {
    "messages": [
      {
        "content": {
          "text": "Kết Thúc, Điểm Của Bạn Là: " + score + "/" + toalQuestion,
        },
        "type": "text"
      }
    ],
    "app_code": "29f99d161e92403b5041cfe94dc12141",
    "sender_id": sender_id,
    "channel": "facebook"
  }
  let options = {
    url: 'https://bot.fpt.ai/api/send_messages/',
    method: 'POST',
    headers: {
        'Authorization': "Bearer 709b29e2e946ed3f87edfe2a7c2503da",
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
    },
    body: JSON.stringify(bd)
}
rq(options, function(err, response, body) {
    if(err) {console.log(err); reject(err); }
    else resolve(response)
});
});
}