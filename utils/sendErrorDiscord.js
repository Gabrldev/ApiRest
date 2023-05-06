const morganbody = require("morgan-body");
const 

function sendlogger(app) {
  morganbody(app, {
    noColors: true,
    stream: logger,
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  });
}

module.exports = sendlogger;
