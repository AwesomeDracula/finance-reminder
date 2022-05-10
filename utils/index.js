var request = require("request");

function doRequest(url) {
  return new Promise(function (resolve, reject) {
    request.get(
      {url, json: true, headers: {"User-Agent": "request"}},
      function (error, res, body) {
        if (!error && res.statusCode == 200) {
          resolve(body);
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = {
  doRequest,
};
