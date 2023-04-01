const express = require("express");
const logger = require("morgan");
//это мидлвара которая в консоль выводит сообщение, куда и какой запрос был.
const cors = require("cors");
require("dotenv").config();

const photosRouter = require("./routes/api/photos");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "common";

app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());

app.use("/api/photos", photosRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found*******" });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { code = 500 } = err;
  res.status(code).json({ message: `${err.message} + code500*******` });
});

module.exports = { app };
