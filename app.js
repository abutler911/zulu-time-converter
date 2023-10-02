const express = require("express");
const moment = require("moment");
const momentTimezone = require("moment-timezone");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const localTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const zuluTime = moment.utc().format("YYYY-MM-DD HH:mm:ss");

  res.render("index", { localTime, zuluTime });
});

app.listen(3000, () => {
  console.log(`Server up on port ${port}...`);
});
