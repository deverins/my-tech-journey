document.addEventListener("DOMContentLoaded", () => {
  const updateTime = () => {
    const now = new Date()
    const timeString = now.toUTCString().split(' ')[4];
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDay').textContent = dayString;
  };
  
  updateTime();
  setInterval(updateTime, 1000);

})