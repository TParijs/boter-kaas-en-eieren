const squares = document.querySelectorAll(".square");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "🧇";
let running = false;

initializeGame();

function initializeGame(){
    squares.forEach(square => square.addEventListener("click", squareClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function squareClicked(){
    const squareIndex = this.getAttribute("squareIndex");

    if(options[squareIndex] != "" & !running){
        return;
    }

    updatesquare(this, squareIndex);
    checkWinner();
}
function updatesquare(square, index){
    options[index] = currentPlayer;
    square.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "🧇") ? "🍴" : "🧇";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const squareA = options[condition[0]];
        const squareB = options[condition[1]];
        const squareC = options[condition[2]];

        if(squareA == "" || squareB == "" || squareC == ""){
            continue;
        }
        if(squareA == squareB && squareB == squareC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "🧇";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    squares.forEach(square => square.textContent = "");
    running = true;
}



{let btn = document.createElement("button")

btn.innerHTML = "back";

btn.setAttribute('class', 'button1',)
btn.onclick = function () {
    const result = confirm('do u want to go back?');
    if (result) { location.replace(`./start.html`)
}
}

document.body.appendChild(btn);
}
