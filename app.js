const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const router = require('./routes/upload')

require("dotenv").config({ path: "./envs/.env" });

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));


app.use('/', router)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;