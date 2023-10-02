const express = require("express");
const moment = require("moment");
const momentTimezone = require("moment-timezone");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/update-time", (req, res) => {
  const { localTime, timeZone } = req.body;
  const zuluTime = moment.utc(localTime).format("MM-DD-YYYY HH:mm:ss");
  const dayOfWeek = moment(localTime).format("dddd");

  res.json({ localTime, zuluTime, dayOfWeek, timeZone });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
