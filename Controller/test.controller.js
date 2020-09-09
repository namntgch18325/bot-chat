const TestAPI = require("../FPT.AI.API/send.test.API.js");
const testModel = require("../Model/get.test.model.js");
const sendMessToUser = require("../FPT.AI.API/SendMessengerByAPI.js");
const saveTest = require("../Model/save.test.result.js");
const jwt = require('jsonwebtoken');
const taskMap = new Map();

exports.SendFistQuestion = async (req,res) => 
{
    let MaDe = req.body.dataSend.MaDe;
    testModel.getTest(MaDe,req.body.dataSend.ThoiGian).then((DeThi) => {
        let sender_id_list = req.body.dataSend.sender_id;
        taskMap.set(MaDe,DeThi);
        sender_id_list.forEach(element => {
        TestAPI.sendTestAPI(taskMap.get(MaDe).CauHoi[0],element,0,MaDe,taskMap.get(MaDe).token).then(data => {
                taskMap.set(element, [{
                    questionID:0,
                    answer:0,
                    isCorrect:false,
                    status:false
                }]); 
                console.log("sent to " + element);
            }).catch(err=> {
                    console.log(err);
                    res.status(403).json({"status":"Faild to sent test at id " + element});
                    return;
                });
    })}).catch(err => {
    console.log(err);  
    res.status(403).json({"status":"Faild to get question "}); 
    return}).then(() => console.log("send promise 2"));
    
    setTimeout(function(){
        res.status(200).json({"status":"Done"});
    },5000)
}

const loadMoreTest = (current_test_ID,sender_id,MaDe,token) =>{
    return promise = new Promise((resolve,reject)=>{
        let cout_question = parseInt(current_test_ID) + 1;
        if(cout_question < taskMap.get(MaDe).CauHoi.length)
        {
            TestAPI.sendTestAPI(taskMap.get(MaDe).CauHoi[cout_question],sender_id,cout_question,MaDe,token)
            .then(data=> resolve(1))
            .catch((err)=> reject(err));
            return;
        }
        else {  
            sendScore(sender_id,MaDe,true);
            return;
        }
    });
}

exports.traLoiTest = (req,res) => {
    let testResult = taskMap.get(req.body.sender_id)
        jwt.verify(req.body.token,process.env.TOKEN_SECRET_TEST,function(err,decode){
            if(err) {
                sendMessToUser.SendMessToUser("Kết Thúc",req.body.sender_id);
                sendScore(req.body.sender_id,req.body.MaDe,false);
                return;
            }
            if(testResult != null)
            {
                if(testResult[req.body.current_test_ID].status == false)
                {
                    if(req.body.user_answer === taskMap.get(req.body.MaDe).CauHoi[req.body.current_test_ID].Correct)
                        taskMap.get(req.body.sender_id)[req.body.current_test_ID].isCorrect = true;
                    else taskMap.get(req.body.sender_id)[req.body.current_test_ID].isCorrect = false;

                    taskMap.get(req.body.sender_id)[req.body.current_test_ID].answer = req.body.user_answer;
                    taskMap.get(req.body.sender_id)[req.body.current_test_ID].questionID = req.body.question_id;
                    taskMap.get(req.body.sender_id)[req.body.current_test_ID].status = true;
                
                loadMoreTest(req.body.current_test_ID,req.body.sender_id,req.body.MaDe,req.body.token).then(() => {
                    taskMap.get(req.body.sender_id).push({
                        questionID:0,
                        answer:0,
                        isCorrect:false,
                        status:false
                    });
                }).catch(err=> res.status(200).json({"status":"Faild"}));
                return
                }
                else
                sendMessToUser.SendMessToUser("Câu Này Làm Rồi, Không Được Sửa",req.body.sender_id);
            }
        }); 
}
const sendScore = (sender_id,MaDe,saveDB) => {
    let score = 0;
    let testResult = taskMap.get(sender_id);
    let lengthQs = taskMap.get(MaDe).CauHoi.length;
    if(testResult != null)
    {
        testResult.forEach(element=>{
            if(element.isCorrect == true) score++;
        });
        if(saveDB == true)
        {
            saveTest.saveResult(score,lengthQs,MaDe,sender_id);
        }
        TestAPI.sendScore(sender_id,score,lengthQs).then(() => taskMap.delete(sender_id))
        .catch(()=>console.log("bao diem loi"));
        return;
    } else sendMessToUser.SendMessToUser("Bài này đã hết giờ",sender_id);
}


