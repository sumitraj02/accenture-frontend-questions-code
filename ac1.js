let toggleBtn = document.getElementById("toggle-btn");
let icon = document.getElementById("icon");
let countDisplay = document.getElementById("count");

let themeCount = 0;
let darkMode = false;

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkMode = !darkMode;

    themeCount++;
    countDisplay.textContent = themeCount;

    icon.textContent = darkMode ? "☀️" : "🌙";
});
