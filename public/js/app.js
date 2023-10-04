const userLocalTime = new Date().toLocaleString("en-US", { hour12: true });

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
      document.getElementById("currentMonth").innerText = data.currentMonth; // New line
    });
}

// Update time immediately on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("darkMode");

  if (isDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    document.querySelector("#.info-grid").classList.add("dark-mode");
  }

  const darkModeBtn = document.getElementById("dark-mode-btn");
  darkModeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    document.querySelector("#.info-grid").classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode")
      ? "enabled"
      : "disabled";
    localStorage.setItem("darkMode", isDarkMode);
  });
});
