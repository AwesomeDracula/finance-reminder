var express = require("express");
var router = express.Router();
const symbolsController = require("../controllers/symbols.controller");

/* GET list search symbols. */
router.get("/", symbolsController.searchSymbols);

/* GET symbol info. */
router.get("/:symbol", symbolsController.getSymbol);

module.exports = router;
