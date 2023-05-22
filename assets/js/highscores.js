// Consts for leaderboard display. 

const leaderboard = document.getElementById("leaderboard");

// leaderboard contents. 

leaderboard.innerHTML = highscorelist.map(score => {
    return `<li class="leaderboard">${score.name} - ${score.score} </li>`;
  })
  .join("");

