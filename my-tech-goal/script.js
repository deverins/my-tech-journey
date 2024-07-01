document.addEventListener("DOMcontnentLoaded", () =>{
  const updateTime = () =>{
    const now = new Date()
    const timeString=now.toUTCString().split('  ')

    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDay').textContent = dayString;
  }
  updateTime();
  setInterval(updateTime, 1000);

})