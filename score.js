// Iteration 8: Making scoreboard functional
let playAgainButton = document.querySelector("#play-again-button")
playAgainButton.addEventListener("click", ()=>{
    location.href = "./game.html"
})

// let score = document.querySelector("#score-board")

// let newscore = localStorage.getItem("score")
// score.innerHTML = newscore

let url = new URLSearchParams(window.location.search);
let score = url.get("score")

let scoreboard = document.querySelector("#score-board")
scoreboard.innerHTML = score;