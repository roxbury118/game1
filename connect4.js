var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [];
  currColumns=[5,5,5,5,5,5,5];

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(' ');

      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");

      tile.addEventListener("click", setPiece);
      document.getElementById("board").append(tile);
    }
    board.push(row);
  }
}

function setPiece() {
  if (gameOver) {
    return;
  }

  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  r=currColumns[c];
  if(r<0){
    return;
  }

 
    board[r][c] = currPlayer;

    let tile = document.getElementById(r.toString()+"-"+c.toString());
    if (currPlayer == playerRed) {
      tile.classList.add("red-piece");
      currPlayer=playerYellow;
      Aiselect();
    } else {
      tile.classList.add("yellow-piece");
      currPlayer=playerRed;
    }

    // Add logic to check for a winner or a tie and set gameOver accordingly
    // Switch the current player for the next turn
  
  r-=1;
currColumns[c]=r;
checkwinner();
  }

 function predict(){
let aipt=10;
let hupt=-10;

for(let i=0;i<7;i++){
  checkwinner()
}
 }
function checkwinner(){
// horizental

for(let r=0;r<rows;r++){
  for(let c=0;c<columns-3;c++){
    if(board[r][c]!= ' '){
      if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){
        setWinner(r,c);
        return;
      }
    } 
  }

}
//vertically 
for(let c=0;c<columns;c++){
  for(let r=0;r<rows-3;r++){
    if(board[r][c] !=' '){
      if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+3][c]){
        setWinner(r,c);
        return;
      }
    }
  }
}
// anti-dioagnal 
for(let r=0;r< rows-3;r++){
  for(let c=0;c<columns-3;c++){
    if(board[r][c]!=' '){
      if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] ==board[r+3][c+3]){
        setWinner(r,c);
        return;
      }
    }
  }
}
//diognal 
for(let r=3;r<rows;r++){
  for(let c =0;c<columns-3;c++){
    if(board[r][c]!=' '){
    if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
      setWinner(r,c);
      return;
      
      }
    }
  }
}

}

function setWinner(r,c){
  let winner =document.getElementById("winner");
  if(board[r][c] == playerRed){
    winner.innerText="Red Wins";
    return
  }else{
    winner.innerText="yellow Wins";
  }
  gameOver=true;
}

function Aiselect(){

}