const symbolsService = require("../services/symbols.service");

async function searchSymbols(req, res, next) {
  try {
    const data = await symbolsService.searchSymbols(req.query.keywords);
    res.send(data);
  } catch (err) {
    console.error(`Error while searching symbols`, err.message);
    next(err);
  }
}

async function getSymbol(req, res, next) {
  try {
    const data = await symbolsService.getSymbolIntraday(req.params.symbol);
    res.send(data);
  } catch (err) {
    console.error(`Error while getting symbol`, err.message);
    next(err);
  }
}

module.exports = {
  searchSymbols,
  getSymbol,
};
