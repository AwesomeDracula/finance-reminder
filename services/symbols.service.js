const {doRequest} = require("../utils");

async function searchSymbols(keywords) {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=S0UGQE0GTZ9CAUQN`;

  const data = await doRequest(url);

  return data;
}

async function getSymbolDaily(symbol) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=S0UGQE0GTZ9CAUQN`;

  const data = await doRequest(url);

  return data;
}

async function getSymbolIntraday(symbol) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=full&apikey=S0UGQE0GTZ9CAUQN`;

  const data = await doRequest(url);

  console.log(data, 'data')

  return data;
}

module.exports = {
  searchSymbols,
  getSymbolDaily,
  getSymbolIntraday,
};
