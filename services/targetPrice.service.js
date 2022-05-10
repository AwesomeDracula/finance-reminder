const symbolsService = require('./symbols.service');

async function create(symbol, tp, sl) {
  const symbolIntradayData = await symbolsService.getSymbolIntraday(symbol);
  console.log(symbolIntradayData);
}

module.exports = {
  create,
}