const express = require("express");
const moment = require("moment");
const momentTimezone = require("moment-timezone");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const localTime = moment().format("MM-DD-YYYY HH:mm:ss");
  const zuluTime = moment.utc().format("YYYY-MM-DD HH:mm:ss");
  const dayOfWeek = moment().format("dddd");
  const localTimeZone = moment.tz.guess();

  res.render("index", { localTime, zuluTime, dayOfWeek, localTimeZone });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
