document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Render skills
      const skillsList = document.getElementById('skills-list');
      data.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      });

      // Render goals
      const goalsList = document.getElementById('goals-list');
      data.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        goalsList.appendChild(li);
      });
    });

  // Update time and date
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toUTCString().split(' ')[4];
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDay').textContent = dayString;
  };

  updateTime();
  setInterval(updateTime, 1000);
});
