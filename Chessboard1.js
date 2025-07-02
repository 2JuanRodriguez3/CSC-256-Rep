// Here is where the 64 squares are places on command.
const board = document.getElementById("chessboard");

// These letters will appear on the board itself in the order they're laid here.
const files = ['A','B','C','D','E','F','G','H'];

// This is where the loop is created for the rows and columns, it loops from the 8 down to one up.
for (let row = 8; row >= 1; row--) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');

    const isWhite = (row + col) % 2 === 0;
    square.classList.add(isWhite ? 'white' : 'black');

     // This adds the small letters A through H to the bottom row of the board.
    if (row === 1) {
      const fileLabel = document.createElement('div');
      fileLabel.style.position = 'absolute';
      fileLabel.style.fontSize = '10px';
      fileLabel.style.bottom = '2px';
      fileLabel.style.right = '2px';
      fileLabel.textContent = files[col];
      square.appendChild(fileLabel);
    }
    // This adds the row numbers 1 through 8 onto the left column.
    if (col === 0) {
      const rankLabel = document.createElement('div');
      rankLabel.style.position = 'absolute';
      rankLabel.style.fontSize = '10px';
      rankLabel.style.top = '2px';
      rankLabel.style.left = '2px';
      rankLabel.textContent = row;
      square.appendChild(rankLabel);
    }

    square.style.position = "relative";
    board.appendChild(square);
  }
}