document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTCElement = document.getElementById("current-time-utc");
  const currentDayElement = document.getElementById("current-day");
  // Update time and date
  const updateTime = () => {
    const now = new Date();
    const currentTimeUTC = now.toLocaleString("en-US", {
      timeZone: "UTC",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

    currentTimeUTCElement.textContent = currentTimeUTC;
    currentDayElement.textContent = currentDay;
  }

  updateTime();
  setInterval(updateTime, 60000);
});
