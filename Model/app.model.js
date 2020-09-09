const db_connect = require("../Database/database.js");

exports.getStudentListModel = () =>{
    return promise = new Promise((resolve,reject)=>{
        let qr = "SELECT senderinformation.studentID, senderinformation.sender_id, senderinformation.sender_id,senderinformation.sender_name,"+
        "classdetail.ClassName FROM senderinformation INNER JOIN classdetail on classdetail.Student_Sender_id = senderinformation.sender_id";
        db_connect.query(qr, function(err,rows){
            if(err) reject(err);
            else
            resolve(rows);
        });
    });
}

exports.getQuestionListModel = () => {
    return promise = new Promise((resolve,reject)=>{
        let qr = "SELECT question.QuestionID,question.Question,question.A,question.B,question.C,question.Answer, teacheraccount.Teacher_Name"+
        " FROM `question` INNER JOIN teacheraccount on teacheraccount.TeacherID = Question.TeacherID";
        db_connect.query(qr,function(err,rows){
            console.log(qr);
            if(err) {console.log(err); reject(err); }
            else resolve(rows);
        });
    });
}

exports.getDeThiModel = (account) =>{
    return promise = new Promise((resolve,reject)=>{
        let qr = "SELECT testID as 'value',testDetail as 'text' FROM `test` "+
        "INNER JOIN teacheraccount on teacheraccount.TeacherID = test.TeacherID WHERE teacheraccount.Account = '" + account + "'";
        db_connect.query(qr,function(err,rows){
            if(err) reject(err);
            else resolve(rows);
        });
    });
}

exports.getTestResultModel = () => {
    return promise = new Promise((resolve,reject)=>{
    let qr = "SELECT testresult.ID,testresult.sender_id,senderinformation.studentID,senderinformation.sender_name,testresult.totalResult,testresult.totalQuestion,testresult.time,testresult.DATE from testresult "+
    "INNER JOIN senderinformation on senderinformation.sender_id = testresult.sender_id " +
    "INNER JOIN classdetail on classdetail.Student_Sender_id = testresult.sender_id "+
    "where classdetail.ClassName = 'gch0717' "+
    "ORDER by testresult.time DESC , testresult.totalResult ASC";
    console.log(qr);
    db_connect.query(qr,function(err,rows){
        if(err) reject(err);
        else resolve(rows);
    });
});
}