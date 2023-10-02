const userLocalTime = new Date().toLocaleString();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

fetch("/update-time", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ localTime: userLocalTime, timeZone: userTimeZone }),
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("localTime").innerText = data.localTime;
    document.getElementById("zuluTime").innerText = data.zuluTime;
    document.getElementById("dayOfWeek").innerText = data.dayOfWeek;
    document.getElementById("localTimeZone").innerText = data.timeZone;
  });

function updateTime() {
  const userLocalTime = new Date().toLocaleString();
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  fetch("/update-time", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ localTime: userLocalTime, timeZone: userTimeZone }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("localTime").innerText = data.localTime;
      document.getElementById("zuluTime").innerText = data.zuluTime;
      document.getElementById("dayOfWeek").innerText = data.dayOfWeek;
      document.getElementById("localTimeZone").innerText = data.timeZone;
    });
}

// Update time immediately on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
