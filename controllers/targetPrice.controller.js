const targetPriceService = require("../services/targetPrice.service");

async function create(req, res, next) {
  try {
    const {symbol, tp, sl} = req.body;
    if (!symbol || !tp || !sl) {
      res.status(400).send("Missing required fields");
    }
    if (isNaN(tp) || isNaN(sl)) {
      res.status(400).send("Take profit and stop loss must be numbers");
    }
    const data = await targetPriceService.create(symbol, tp, sl);
    console.log(data);
    if (data) {
      res.status(204).send(data);
    } else {
      res.status(400).send("Failed");
    }
  } catch (err) {
    console.error(`Error while creating target price`, err.message);
    next(err);
  }
}

module.exports = {
  create,
};
