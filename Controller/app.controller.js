const model = require("../Model/app.model.js");
exports.getStudentList = (req,res) =>{
    model.getStudentListModel()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(403).json({"status":"Can not select data"}));
}

exports.getAllQuestionList = (req,res) =>{
    model.getQuestionListModel()
    .then(rows=> res.status(200).json(rows))
    .catch(err=> res.status(403).json({"status":"Faild to get question list"}));
}

//SELECT testID,testDetail,teacheraccount.Teacher_Name FROM `test` INNER JOIN teacheraccount on teacheraccount.TeacherID = test.TeacherID WHERE teacheraccount.Account = 'admin'
exports.getDeThi = (req,res) => {
    model.getDeThiModel('admin')
    .then(rows=> res.status(200).json(rows))
    .catch(err => res.status(403).json({"status":"Faild To Get Data"}));
}

exports.getTestResult = (req,res) => {
    model.getTestResultModel().then(rows => res.status(200).json(rows)).catch(err=> res.status(403).json({"status":"faild to get test result"}))
}