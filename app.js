//DOM selectors
const container = document.querySelector('.container')
const result = document.querySelector('#result')
const finalResult = document.querySelector("#finalResult")
const winner = document.querySelector("#winner")

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
    const moves = { 1: "🗿", 2: "📄", 3: "✂" }
    if (comp === user) {
        drawCount++;
        return ['draw!', `Computer chose ${moves[comp]}\nYou chose ${moves[user]}`]
    }
    if (comp + 1 === user || comp - 2 == user) {
        player.score += 1;
        return ['You Win!', `Computer chose ${moves[comp]}\nYou chose ${moves[user]}`]
    }
    computer.score += 1;
    return ['You Lost!', `Computer chose ${moves[comp]}\nYou chose ${moves[user]}`]
}

//Game
container.addEventListener('click', (e) => {
    let userInput = false;
    while (!userInput) {
        userInput = validate(e.target.id)
    }
    let results = checkWinner(computer.play(), userInput)
    winner.innerHTML = results[0]
    result.innerText = results[1];
    finalResult.innerText = `Computer score: ${computer.score}\nPlayer score: ${player.score}\nDraws: ${drawCount}`;
})
