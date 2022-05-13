const symbolsService = require("./symbols.service");
const mailer = require("./mailer.service");
const _ = require("lodash");

const body = "Hello world";
const TP = "Take Profit Now!";
const SL = "Stop Loss Now!";

async function create(to, symbol, tp, sl) {
  try {
    const symbolIntradayData = await symbolsService.getSymbolIntraday(symbol);
    const metaData = symbolIntradayData["Meta Data"];
    const latestDay = metaData["3. Last Refreshed"].substring(0, 10);
    const series = symbolIntradayData["Time Series (1min)"];
    const latestData = _.flow([
      Object.entries,
      (arr) => arr.filter(([key, value]) => key.includes(latestDay)),
      Object.fromEntries,
    ])(series);
    const timer = setInterval(function () {
      const currentDate = new Date();
      let curHour =
        currentDate.getHours() < 10
          ? `0${currentDate.getHours()}`
          : currentDate.getHours();
      let curMin =
        currentDate.getMinutes() < 10
          ? `0${currentDate.getMinutes()}`
          : currentDate.getMinutes();
      const key = latestDay + " " + curHour + ":" + curMin + ":00";
      const data = latestData[key];
      console.log(key, data);
      if (!data) {
        return false;
      }
      if (tp <= parseFloat(data["4. close"])) {
        mailer.sendMail(to, TP, `Let's sell now at price ${parseFloat(data["4. close"])} to get profit!`);
        console.log("TP");
        clearInterval(timer);
      } else if (sl >= parseFloat(data["4. close"])) {
        mailer.sendMail(to, SL, `Let's sell now at price ${parseFloat(data["4. close"])} to save your money!`);
        console.log("SL");
        clearInterval(timer);
      } else {
        console.log("Nothing");
      }
    }, 60000);
    return latestData;
  } catch (err) {
    return false;
  }
}

function intervalFunc(date, latestData, tp, sl) {}

module.exports = {
  create,
};
