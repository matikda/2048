 let gameBoard = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// function to get the tile adjacent to the given tile in the given direction
function getAdjacentTile(row, col, direction) {
  switch (direction) {
    case "up":
      return [row - 1, col];
    case "down":
      return [row + 1, col];
    case "left":
      return [row, col - 1];
    case "right":
      return [row, col + 1];
  }
}

// function to render two new tiles
function renderNewTiles() {
  for (let i = 0; i < 2; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    } while (gameBoard[row][col] !== 0);

    gameBoard[row][col] = Math.random() < 0.5 ? 2 : 4;
  }
}

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

  // Render two new tiles
  renderNewTiles();
}

// start the game
render();

// handle keyboard input
document.addEventListener("keydown", function(event) {
  let direction, startRow, endRow, rowInc, startCol, endCol, colInc;

  switch (event.keyCode) {
    case 38: // up arrow
      direction = "up";
      startRow = 1;
      endRow = 3;
      rowInc = 1;
      startCol = 0;
      endCol = 3;
      colInc = 1;
      break;
    case 40: // down arrow
      direction = "down";
      startRow = 2;
      endRow = 0;
      rowInc = -1;
      startCol = 0;
      endCol = 3;
      colInc = 1;
      break;
    case 37: // left arrow
      direction = "left";
      startRow = 0;
      endRow = 3;
      rowInc = 1;
      startCol = 1;
      endCol = 3;
      colInc = 1;
      break;
    case 39: // right arrow
      direction = "right";
      startRow = 0;
      endRow = 3;
      rowInc = 1;
      startCol = 2;
      endCol = 0;
      colInc = -1;
      break;
    default:
      return;
  }

  let movedTiles = false;

  for (let row = startRow; row !== endRow; row += rowInc) {
    for (let col = startCol; col
