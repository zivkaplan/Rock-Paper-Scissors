
function Computer() {
    this.play = () => (Math.floor(Math.random() * 3) + 1)
    this.score = 0;
}
function Player() {
    this.choose = () => (window.prompt("Rock, paper or scissors?").toLowerCase())
    this.score = 0;
}

const computer = new Computer();
const player = new Player();
const moves = { 1: "rock", 2: "paper", 3: "scissors" }


function validate(input) {
    const reversedMoves = { "rock": 1, "paper": 2, "scissors": 3 }
    return reversedMoves[input]
}
function check(comp, user) {
    if (comp === user) {
        return `draw!\nComputer chose ${moves[comp]}\nYou chose ${moves[user]}`
    }
    if (comp + 1 === user || comp - 2 == user) {
        player.score += 1;
        return `You Win!\nComputer chose ${moves[comp]}\nYou chose ${moves[user]}`
    }
    computer.score += 1;
    return `You Lost\nComputer chose ${moves[comp]}\nYou chose ${moves[user]}`
}

for (let i = 0; i < 5; i++) {
    let userInput = false;
    while (!userInput) {
        userInput = validate(player.choose())
    }
    console.log(check(computer.play(), userInput));
}
console.log(`Computer score: ${computer.score}\nPlayer score: ${player.score}`);