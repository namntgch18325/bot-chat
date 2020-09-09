const router = require('express').Router();
const Controller = require("../Controller/Covid_19.Controller.js");

router.get("/getCovid19",Controller.Covid19);

module.exports = router;