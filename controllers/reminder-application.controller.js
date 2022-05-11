const mailer = require("../utils/mailer");

async function notification(req, res, next) {
  try {
    const { to, subject, body } = req.body;
    await mailer.sendMail(to, subject, body);

    // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
    res.send("<h3>Your email has been sent successfully.</h3>");
  } catch (err) {
    console.error(`Error while creating target price`, err.message);
    next(err);
  }
}

module.exports = {
  notification,
};
