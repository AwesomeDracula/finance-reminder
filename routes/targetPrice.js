var express = require("express");
var router = express.Router();
var request = require("request");
const targetPriceController = require('../controllers/targetPrice.controller');

/* POST create target price. */
router.post("/", targetPriceController.create);

module.exports = router;
