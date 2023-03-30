 let gameBoard = [  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// update the game board to reflect the current state of the game
function render() {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[row].length; col++) {
      const tileId = `tile-${row}-${col}`;
      const tileImg = document.getElementById(tileId);
      
      if (gameBoard[row][col] === 0) {
        tileImg.src = "images/empty-tile.jpg";
      } else {
        tileImg.src = `images/zendaya-${gameBoard[row][col]}.jpg`;
      }
    }
  }

  // Add two random tiles
  for (let i = 0; i < 2; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    } while (gameBoard[row][col] !== 0);

    gameBoard[row][col] = Math.random() < 0.5 ? 2 : 4;
  }
}

// start the game
startGame();

// handle keyboard input
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 40) {
    moveDown();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  }
});
