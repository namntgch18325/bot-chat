const register_model = require("../Model/register.model.js");
const sendMess = require("../FPT.AI.API/SendMessengerByAPI.js");
exports.register =(req,res) =>{
    register_model.register(req.body.student_id,req.body.user_class.toLowerCase(),req.body.class_code,req.body.sender_id,req.body.sender_name,req.body.user_nick_Name)
    .then((data)=>{
        sendMess.SendMessToUser(data,req.body.sender_id);
        return;
    })
    .catch((data)=> {
        sendMess.SendMessToUser(data,req.body.sender_id);
        return;
    });
    res.status(200).send("Done");
}