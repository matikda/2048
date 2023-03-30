 let gameBoard = [  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// update the game board to reflect the current state of the game
function render() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let tile = document.querySelector(`#tile-${row}-${col}`);
      let value = gameBoard[row][col];
      if (value === 0) {
        tile.src = "images/empty-tile.jpg";
      } else if (value === 2) {
        tile.src = "images/zendaya-2.jpg";
      } else if (value === 4) {
        tile.src = "images/zendaya-4.jpg";
      } else if (value === 8) {
        tile.src = "images/zendaya-8.jpg";
      } else if (value === 16) {
        tile.src = "images/zendaya-16.jpg";
      } else if (value === 32) {
        tile.src = "images/zendaya-32.jpg";
      } else if (value === 64) {
        tile.src = "images/zendaya-64.jpg";
      } else if (value === 128) {
        tile.src = "images/zendaya-128.jpg";
      } else if (value === 256) {
        tile.src = "images/zendaya-256.jpg";
      } else if (value === 512) {
        tile.src = "images/zendaya-512.jpg";
      } else if (value === 1024) {
        tile.src = "images/zendaya-1024.jpg";
      } else if (value === 2048) {
        tile.src = "images/zendaya-2048.jpg";
      } else if (value === 4096) {
        tile.src = "images/zendaya-4096.jpg";
      } else if (value === 8192) {
        tile.src = "images/zendaya-8192.jpg";
      }
    }
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
