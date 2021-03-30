//DOM selectors
const container = document.querySelector('.container')
const result = document.querySelector('#result')
const finalResult = document.querySelector("#finalResult")
const title = document.querySelector("#title")

//computer player object
function Computer() {
    this.play = () => (Math.floor(Math.random() * 3) + 1)
    this.score = 0;
    this.resetScore = function () { this.score = 0 };
}

//user player object
function Player() {
    this.choose = () => (window.prompt("Rock, paper or scissors?").toLowerCase())
    this.score = 0;
    this.resetScore = function () { this.score = 0 };
}
//declaring global 
const computer = new Computer();
const player = new Player();
let drawCount = 0;

//validating user input
function validate(input) {
    const reversedMoves = { "rock": 1, "paper": 2, "scissors": 3 }
    return reversedMoves[input]
}

//functiom that checks who won
function checkWinner(comp, user) {
    const moves = { 1: "rock", 2: "paper", 3: "scissors" }
    if (comp === user) {
        drawCount++;
        return ['Draw!', `Computer chose <b>${moves[comp]}</b> | You chose <b>${moves[user]}</b>`]
    }
    if (comp + 1 === user || comp - 2 == user) {
        player.score += 1;
        return ['You Win!', `Computer chose <b>${moves[comp]}</b> | You chose <b>${moves[user]}</b>`]
    }
    computer.score += 1;
    return ['You Lost!', `Computer chose <b>${moves[comp]}</b> | You chose <b>${moves[user]}</b>`]
}

//Game
container.addEventListener('click', (e) => {
    let userInput = false;
    while (!userInput) {
        userInput = validate(e.target.id)
    }
    let results = checkWinner(computer.play(), userInput)
    title.innerHTML = results[0]
    result.innerHTML = results[1];
    finalResult.innerHTML = `Computer score: <b>${computer.score}</b> | Player score: <b>${player.score}</b> | Draws: <b>${drawCount}</b>`;
})