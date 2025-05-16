const board = document.getElementById("sudoku-board");
const message = document.getElementById("message");

// Create 9x9 grid
for (let row = 0; row < 9; row++) {
  const tr = document.createElement("tr");
  for (let col = 0; col < 9; col++) {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 9;
    input.oninput = () => {
      if (input.value < 1 || input.value > 9) {
        input.value = "";
      }
    };
    td.appendChild(input);
    tr.appendChild(td);
  }
  board.appendChild(tr);
}

function getBoard() {
  const matrix = [];
  const rows = board.getElementsByTagName("tr");
  for (let r = 0; r < 9; r++) {
    const cols = rows[r].getElementsByTagName("input");
    matrix[r] = [];
    for (let c = 0; c < 9; c++) {
      const val = parseInt(cols[c].value);
      if (!isNaN(val) && (val < 1 || val > 9)) {
        return null; // Invalid input found
      }
      matrix[r][c] = isNaN(val) ? 0 : val;
    }
  }
  return matrix;
}

function setBoard(matrix) {
  const rows = board.getElementsByTagName("tr");
  for (let r = 0; r < 9; r++) {
    const cols = rows[r].getElementsByTagName("input");
    for (let c = 0; c < 9; c++) {
      cols[c].value = matrix[r][c] !== 0 ? matrix[r][c] : "";
    }
  }
}

function isValid(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (
      board[row][x] === num ||
      board[x][col] === num ||
      board[3 * Math.floor(row / 3) + Math.floor(x / 3)]
           [3 * Math.floor(col / 3) + x % 3] === num
    ) {
      return false;
    }
  }
  return true;
}

function solve(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(matrix, row, col, num)) {
            matrix[row][col] = num;
            if (solve(matrix)) return true;
            matrix[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solveSudoku() {
    message.textContent = "";
    const matrix = getBoard();
    if (matrix === null) {
      alert("Invalid input! Please enter numbers 1-9 only.");
      message.textContent = "Invalid input! Please enter numbers 1-9 only.";
      message.style.color = "red";
      return;
    }
    if (solve(matrix)) {
      setBoard(matrix);
      message.textContent = "Sudoku solved!";
      message.style.color = "green";
    } else {
      alert("No solution exists! Please check your input.");
      message.textContent = "No solution exists! Please check your input.";
      message.style.color = "red";
    }
  }
  
