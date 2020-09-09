const router = require('express').Router();
const Controller = require('../Controller/app.controller.js');

router.get("/getStudentList",Controller.getStudentList);
router.get("/getAllQuestionList",Controller.getAllQuestionList);
router.get("/getDeThi",Controller.getDeThi);
router.get("/getTestResult",Controller.getTestResult);
module.exports =  router;