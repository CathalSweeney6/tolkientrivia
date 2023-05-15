const leaderboard = document.getElementById("leaderboard");
const highscorelist = JSON.parse(localStorage.getItem("highscorelist")) || [];

leaderboard.innerHTML = leaderboard
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");