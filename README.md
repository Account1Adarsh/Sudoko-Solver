# Sudoku Solver

A combined **web-based** and **C++ console** Sudoku solving project that demonstrates backtracking in two environments:

* **Interactive Web Solver**: HTML/CSS/JavaScript implementation allowing users to input puzzles via a 9×9 grid and watch the solver fill in cells step-by-step.
* **C++ Command-Line Solver**: `solve_matrix.cpp` implements the same backtracking algorithm for batch/CLI use, reading puzzles from text files or standard input.

---

## 🔍 Project Overview

1. **Web Solver**

   * **Files**: `index.html`, `style.css`, `script.js`
   * **Logic**: JavaScript reads the 9×9 matrix from the DOM, uses `solve(board)` to recursively place digits 1–9, checking rows, columns, and 3×3 subgrids with `isValid()` before placing. Cells update live to visualize the algorithm.

2. **C++ Solver**

   * **File**: `solve_matrix.cpp`
   * **Logic**: Reads a 9×9 grid (zeros for empty) from a file or `stdin`, locates the next empty cell with `findEmpty()`, then tries numbers 1–9 using `isValid()` checks on rows, columns, and subgrids. Recursion/backtracking continues until the puzzle is solved or deemed unsolvable.

---

## 📁 Repository Structure

```
Sudoko-Solver/          # Root directory
├── index.html          # Web interface for the solver
├── style.css           # Styles for the HTML grid and controls
├── script.js           # JS backtracking logic and DOM updates
├── solve_matrix.cpp    # C++ backtracking solver (console application)
├── puzzles/            # (Optional) Sample puzzle files (e.g., easy.txt)
├── README.md           # This documentation
└── LICENSE             # MIT License
```

---

## 🚀 Getting Started

### Web Solver

1. Clone the repo and navigate into it:

   ```bash
   git clone https://github.com/Account1Adarsh/Sudoko-Solver.git
   cd Sudoko-Solver
   ```
2. Open `index.html` in any modern browser.
3. Input your puzzle digits (use blank or 0 for empty), then click **Solve** to see the algorithm in action.

### C++ Solver

1. Compile the solver:

   ```bash
   g++ solve_matrix.cpp -o sudoku_solver
   ```
2. Run it with a puzzle file or manual input:

   ```bash
   # Using a file
   ./sudoku_solver puzzles/easy.txt

   # Manual entry (9 lines of digits):
   ./sudoku_solver
   ```
3. The solved grid prints to the console.

---

## 🧠 Algorithm Details

Both implementations share this backtracking approach:

1. **Find Empty**: Locate the next cell with value 0 (or empty).
2. **Try Digits**: For numbers 1–9, check if placing the digit is valid:

   * No duplicate in the same row
   * No duplicate in the same column
   * No duplicate in the corresponding 3×3 subgrid
3. **Recursion**: Place the digit and recurse to solve the rest of the grid.
4. **Backtrack**: If no valid digit leads to a solution, reset the cell to 0 and return false to backtrack.
5. **Completion**: Continue until all cells are filled (successful solve) or no moves remain (unsolvable).

Helper functions:

* `isValid(board, row, col, num)` checks constraints.
* `solve(board)` handles recursion.
* In C++, `findEmpty()` returns the next empty cell; in JS, a nested loop scans the DOM matrix.

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Adarsh Kumar Singh** — [GitHub Profile](https://github.com/Account1Adarsh)
