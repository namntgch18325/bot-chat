const router = require('express').Router();
const Controller = require("../Controller/definition.js");

router.post("/getDefinition",Controller.getDefinition);
router.post("/dontUnderstandDefinition",Controller.DontUnderstandDefinition);

module.exports = router;