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
  const localMoment = moment.tz(localTime, "MM-DD-YYYY HH:mm:ss", timeZone);
  const zuluTime = localMoment.utc().format("MM-DD-YYYY HH:mm:ss");
  const dayOfWeek = localMoment.format("dddd");
  const currentMonth = localMoment.format("MMMM");
  res.json({ localTime, zuluTime, dayOfWeek, timeZone, currentMonth });
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:3000");
});
