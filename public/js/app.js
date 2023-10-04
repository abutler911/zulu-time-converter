const updateTime = () => {
  const localTime = new Date().toLocaleString();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  fetch("/update-time", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ localTime, timeZone }),
  })
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        const elem = document.getElementById(key);
        if (elem) elem.innerText = data[key];
      });
      document.getElementById("localTimeZone").innerText = timeZone;
    });
};

updateTime();
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const elementsToDarken = [
    document.body,
    document.querySelector(".info-grid"),
    ...document.querySelectorAll(".info-grid div"),
  ];

  if (localStorage.getItem("darkMode") === "enabled") {
    elementsToDarken.forEach((el) => el.classList.add("dark-mode"));
  }

  document.getElementById("dark-mode-btn").addEventListener("click", (e) => {
    e.preventDefault();
    elementsToDarken.forEach((el) => el.classList.toggle("dark-mode"));
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode") ? "enabled" : "disabled"
    );
  });
});
