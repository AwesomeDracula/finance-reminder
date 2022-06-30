const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
var bodyParser = require("body-parser"); // thư viện để đọc body khi user gửi lên
const cors = require("cors");

var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var symbolsRouter = require("./routes/symbols");
var reminderApplicationRouter = require("./routes/reminder-application");

const PORT = 8080;

const app = express();

//khởi tạo Server
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.set("socketIo", io);

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/symbol", symbolsRouter);
app.use("/finance-reminder-application", reminderApplicationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//khởi tạo socket
io.on("connection", (socket) => {
  console.log("connection: " + socket.id);

  //ngắt kết nối socket
  socket.on("disconnect", () => {
    console.log("disconnect: " + socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log("Hello");
});
