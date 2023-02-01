const express = require("express");
const app = express();
const users = require("./users");

const metrics = {
  requestsCount: {},
};

app.use("/users", users);

app.get("/", (req, res, next) => {
  return res.send("Hello World !");
});

app.get("/health", (req, res, next) => {
  return res.status(200).json({ status: "healthy" });
});

app.get("/metrics", (req, res, next) => {
  metrics.uptime = `${process.uptime().toFixed(2)} seconds`;
  return res.json(metrics);
});

module.exports = app;
