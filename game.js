// Define the game board
let gameBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// Generate a random tile (2 or 4)
function generateRandomTile() {
  return Math.random() < 0.9 ? 2 : 4;
}

// Place a new tile on an empty square
function placeNewTile() {
  const emptySquares = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c] === 0) {
        emptySquares.push([r, c]);
      }
    }
  }
  if (emptySquares.length === 0) {
    return false;
  }
  const [r, c] = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  gameBoard[r][c] = generateRandomTile();
  return true;
}

// Initialize the game board with two random tiles
function initGame() {
  placeNewTile();
  placeNewTile();
}

// Check if the game is over (i.e. no more moves possible)
function isGameOver() {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c] === 0) {
        return false;
      }
      if (c !== 3 && gameBoard[r][c] === gameBoard[r][c+1]) {
        return false;
      }
      if (r !== 3 && gameBoard[r][c] === gameBoard[r+1][c]) {
        return false;
      }
    }
  }
  return true;
}

// Move tiles to the left
function moveLeft() {
  let moved = false;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (gameBoard[r][c] !== 0) {
        for (let nc = 0; nc < c; nc++) {
          if (gameBoard[r][nc] === 0 && noObstacleBetween(r, nc, r, c)) {
            gameBoard[r][nc] = gameBoard[r][c];
            gameBoard[r][c] = 0;
            moved = true;
            break;
          }
          if (gameBoard[r][nc] === gameBoard[r][c] && noObstacleBetween(r, nc, r, c)) {
            gameBoard[r][nc] *= 2;
            gameBoard[r][c] = 0;
            moved = true;
            break;
          }
        }
      }
    }
  }
  return moved;
}

// Move tiles to the right
function moveRight() {
  let moved = false;
  for (let r = 0; r < 4; r++) {
    for (let c = 3; c >= 0; c--) {
      if (gameBoard[r][c] !== 0) {
        for (let nc = 3; nc > c; nc--) {
          if (gameBoard[r][nc] === 0 && noObstacleBetween(r, c, r, nc
