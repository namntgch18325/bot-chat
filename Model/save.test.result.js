const db_connect = require("../Database/database.js");

exports.saveResult =  (score,totalQuestion,testID,sender_id) => {
    let qr = "INSERT INTO `testresult`(`testID`, `sender_id` , `totalResult`, `totalQuestion`) VALUES (" + testID +",'" + sender_id + "', " + score + ","+ totalQuestion +")";
    db_connect.query(qr,function(err,rows){

    });
}