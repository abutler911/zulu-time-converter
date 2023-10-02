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

  // Parse the local time in the given time zone
  const localMoment = moment.tz(localTime, "MM-DD-YYYY HH:mm:ss", timeZone);

  // Convert to Zulu time (UTC)
  const zuluTime = localMoment.utc().format("MM-DD-YYYY HH:mm:ss");

  // Get the day of the week
  const dayOfWeek = localMoment.format("dddd");

  res.json({ localTime, zuluTime, dayOfWeek, timeZone });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
