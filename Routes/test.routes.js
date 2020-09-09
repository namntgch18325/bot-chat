const router = require('express').Router();
const Controller = require("../Controller/test.controller.js");

router.post("/traLoiTest",Controller.traLoiTest);
router.post("/SendFistQuestion",Controller.SendFistQuestion);
//router.post("/loadMoreTest",Controller.loadMoreTest);
module.exports = router;