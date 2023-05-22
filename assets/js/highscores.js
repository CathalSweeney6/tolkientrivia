// Consts for leaderboard display. 

const leaderboard = document.getElementById("leaderboard");
const highscorelist = JSON.parse(localStorage.getItem("highscorelist")) || [];
// leaderboard contents. 

leaderboard.innerHTML = highscorelist.map(score => {
    return `<li class="leaderboard">${score.name} - ${score.score} </li>`;
  })
  .join("");

