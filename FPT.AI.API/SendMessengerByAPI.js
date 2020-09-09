const rq = require('request');
exports.SendMessToUser = (content,sender_id) =>{
    let bd = {
        "messages": [
          {
            "content": {
              "text": content,
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
        if(err) {console.log(err)}
    });
}