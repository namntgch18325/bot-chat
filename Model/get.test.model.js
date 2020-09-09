const jwt = require('jsonwebtoken');
const sha512 = require('js-sha512');
const db_connect = require("../Database/database.js");
const { promise } = require('../Database/database.js');
const { json } = require('body-parser');
exports.getTest = (MaDe,ThoiGian) => {
    return promises = new Promise((resolve,reject)=>{
        let payLoad = {
            "iat": Math.floor(Date.now() / 1000),
            "exp": Math.floor(Date.now() / 1000) + (60*ThoiGian), //10p
            "maDe": MaDe
        };
        let alg = {
            "algorithm": "HS512"
        };

        let tk = jwt.sign(JSON.stringify(payLoad),process.env.TOKEN_SECRET_TEST,alg);
        selectTest(MaDe,function(err,rows){
            if(err) reject(err)
            else
            {
                let DeThi = {
                    CauHoi: rows,
                    token:tk
                };
                resolve(DeThi);
            }
        });

});
}
selectTest = (testID,callback) =>{
    let qr = "select Question.QuestionID as 'ID',question.Question as 'Content',question.A,question.B,question.C,question.Answer as 'Correct' "+
    "FROM question INNER JOIN testdetaillist on testdetaillist.questionID = question.QuestionID WHERE testdetaillist.testID = " + testID;
    db_connect.query(qr,callback);
}
