// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

let playButton = document.querySelector("#play-button")
playButton.addEventListener("click", () =>{
    location.href = "./game.html";
})