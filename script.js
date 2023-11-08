let randdice1 = Math.floor(Math.random() * 6) +1;
let randdice2 = Math.floor(Math.random() * 6) +1;
let winner = -1;

function dicesImageChanger(num1, num2) {
    document.querySelector(".img1").setAttribute("src" , "./images/dice"+ num1 +".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+ num2 +".png");
}

function findMax(player1, player2) {

    if (player1 > player2) {
        winner = 1;
    } else if (player1 < player2){
        winner = 2;
    } else {
        winner = 0;
    }

    return winner;
}

function displayWinner(winnerPlayer) {
    if (winnerPlayer !== 0) {
        document.querySelector("h1").innerHTML = "Player " + winnerPlayer + " Wins! 🏅";
    } else {
        document.querySelector("h1").textContent = "Draw! 🤝";
    }
    
}

dicesImageChanger(randdice1, randdice2);
findMax(randdice1,randdice2);
displayWinner(winner);