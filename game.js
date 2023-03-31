// Initialize the game board
let gameBoard = [
  [2, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// Renders a single tile with the specified row and column, using the specified image
function renderTile(row, col, image) {
  const tileId = `tile-${row}-${col}`;
  const tileImg = document.getElementById(tileId);
  tileImg.src = image;
}

// update the game board to reflect the current state of the game
function render() {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[row].length; col++) {
      if (gameBoard[row][col] === 0) {
        renderTile(row, col, "images/empty-tile.jpg");
      } else {
        renderTile(row, col, `images/zendaya-${gameBoard[row][col]}.jpg`);
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
    renderTile(row, col, `images/zendaya-${gameBoard[row][col]}.jpg`);
  }
}

// start the game
function startGame() {
  render();
}

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

// Move tiles up
function moveUp() {
  for (let col = 0; col < gameBoard[0].length; col++) {
    for (let row = 1; row < gameBoard.length; row++) {
      if (gameBoard[row][col] !== 0) {
        let currentRow = row;
        while (currentRow > 0 && gameBoard[currentRow - 1][col] === 0) {
          currentRow--;
        }
        if (currentRow !== row) {
          gameBoard[currentRow][col] = gameBoard[row][col];
          gameBoard[row][col] = 0;
        }
        if (currentRow > 0 && gameBoard[currentRow - 1][col] === gameBoard[currentRow][col]) {
          gameBoard[currentRow - 1][col] *= 2;
          gameBoard[currentRow][col] = 0;
        }
      }
    }
  }
  render();
}

// Move tiles down
function moveDown() {
  for (let col = 0; col < gameBoard[0].length; col++) {
    for (let row = gameBoard.length - 2; row >= 0; row--) {
      if (gameBoard[row][col] !== 0) {
        let currentRow = row;
        while (currentRow < gameBoard.length - 1 && gameBoard[currentRow + 1][col] === 0) {
          currentRow++;
        }
        if (currentRow !== row) {
          gameBoard[currentRow][col] = gameBoard[row][col];
          gameBoard[row][col] = 0;
        }
        if (currentRow < gameBoard.length - 1 && gameBoard[currentRow + 1][col] === gameBoard[currentRow][col]) {
          gameBoard[currentRow + 1][col] *= 2;
          gameBoard[currentRow][col] = 0;
        }
      }
    }
  }
  render();
}

// Move tiles left
function moveLeft() {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 1; col < gameBoard[row].length; col++) {
      if (gameBoard[row][col] !== 0) {
        let currentCol = col;
        while (currentCol > 0 && gameBoard[row][currentCol - 1] === 0) {
          currentCol--;
        }
        if (currentCol !== col) {
          gameBoard[row][currentCol] = gameBoard[row][col];
          gameBoard[row][col] = 0;
        }
        if (currentCol > 0 && gameBoard[row][currentCol - 1] === gameBoard[row][currentCol]) {
          gameBoard[row][currentCol - 1] *= 2;
          gameBoard[row][currentCol] = 0;
        }
      }
    }
  }
  render();
}

// Move tiles right
function moveRight() {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = gameBoard[row].length - 2; col >= 0; col--) {
      if (gameBoard[row][col] !== 0) {
        let currentCol = col;
        while (currentCol < gameBoard[row].length - 1 && gameBoard[row][currentCol + 1] === 0) {
          currentCol++;
        }
        if (currentCol !== col) {
          gameBoard[row][currentCol] = gameBoard[row][col];
          
          
startGame();
