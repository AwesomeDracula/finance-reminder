var express = require("express");
var router = express.Router();
const application = require("../controllers/reminder-application.controller");

router.post("/", application.notification);

module.exports = router;
