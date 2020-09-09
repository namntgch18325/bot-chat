const db_connect = require("../Database/database.js");

exports.register = (studentID,className,code,sender_id,user_name,nickname,callback) => 
{
    return promise = new Promise((resolve,reject)=>{
        if(code != "1xch0") {
            reject("Sai Code, phiên đăng ký đã bị hủy");
            return;
        }
        if(code === "1xch0")
        {
            let qr = "INSERT INTO `classdetail`(`ClassName`, `Student_Sender_id`) VALUES ('" + className +"'" + ",'" +sender_id + "')";
            let qr2 = "INSERT INTO `senderinformation`(`studentID`, `sender_id`, `sender_name`, `sender_nickname`) "+
            "VALUES ('" + studentID + "','" + sender_id+  "','"+ user_name +"','null')";
            let selectName = "select teacheraccount.Teacher_Name from class INNER JOIN teacheraccount on class.TeacherID = teacheraccount.TeacherID where ClassName ='" + className + "'";
            db_connect.query(selectName,function(err,rows){
                if(err) { reject("Server đang bảo trì, Hãy Thử Lại Sau"); return }
                if(rows.length<=0) { reject("Lớp học không tồn tại"); return }
                else if(rows.length >0 ){
                    let name = rows[0].Teacher_Name;
                    db_connect.query(qr2,function(err,rows){
                        if(!err)
                        {
                            db_connect.query(qr,function(err,rows){
                                if(!err) 
                                {
                                   if(err) reject("Server đang bảo trì, Hãy Thử Lại Sau");
                                   else resolve("Bạn đã đăng ký thành công, lớp " + className + " người tạo lớp " +name);
                                } 
                            });    
                        }
                        else reject("Có thể bạn đã đăng ký trước đó");
                    })
                }
            });
        }
    });
}