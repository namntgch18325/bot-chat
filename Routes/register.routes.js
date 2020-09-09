const router = require('express').Router();
const Controller = require('../Controller/register.Controller.js');
router.post("/register",Controller.register);

module.exports = router;