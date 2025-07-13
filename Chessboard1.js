// Here is where the 64 squares are places on command.
const board = document.getElementById('board');
const turnDisplay = document.getElementById('turnDisplay');

let selectedPiece = null;
let currentTurn = 'red';

function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      const isDark = (row + col) % 2 !== 0;
      square.classList.add(isDark ? 'dark' : 'light');
      square.dataset.row = row;
      square.dataset.col = col;

      // This places the pieces only on dark squares
      if (isDark) {
        if (row < 3) addPiece(square, 'black');
        else if (row > 4) addPiece(square, 'red');
      }

      square.addEventListener('click', () => handleSquareClick(square));
      board.appendChild(square);
    }
  }
}

function addPiece(square, color) {
  const piece = document.createElement('div');
  piece.classList.add('piece', color);
  piece.dataset.color = color;
  piece.addEventListener('click', (e) => handlePieceClick(e, piece));
  square.appendChild(piece);
}

function handlePieceClick(e, piece) {
  e.stopPropagation(); // this will prevent square click
  if (piece.dataset.color !== currentTurn) return;

  // this will deselect if the same figure is clicked again
  if (selectedPiece === piece) {
    piece.classList.remove('selected');
    selectedPiece = null;
  } else {
    clearSelection();
    selectedPiece = piece;
    piece.classList.add('selected');
  }
}

function handleSquareClick(square) {
  if (!selectedPiece) return;

  const targetSquare = square;
  if (targetSquare.classList.contains('dark') && targetSquare.children.length === 0) {
    targetSquare.appendChild(selectedPiece);
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
    switchTurn();
  }
}

// This allows the rule to switch turns for everytime a player moves their circles on the board.
function switchTurn() {
  currentTurn = currentTurn === 'red' ? 'black' : 'red';
  turnDisplay.textContent = currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1);
}

function clearSelection() {
  document.querySelectorAll('.piece.selected').forEach(p => p.classList.remove('selected'));
  selectedPiece = null;
}

// This creates and renders the board and it's addons.
createBoard();



 