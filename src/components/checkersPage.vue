<template>
  <div>
    <div class="checkers-board animated">
      <div v-for="row in 8" :key="row-1" class="row">
        <div v-for="col in 8" :key="col-1" 
             :class="['cell', (row + col) % 2 === 0 ? 'light' : 'dark',
                     isSelected(row-1, col-1) ? 'selected' : '']"
             @click="handleCellClick(row-1, col-1)">
          <div v-if="board[row-1][col-1]" 
               :class="['piece', board[row-1][col-1].color, {'king': board[row-1][col-1].isKing}]">
          </div>
        </div>
      </div>
    </div>
    <div :class="['status', currentPlayer]">Current Player: {{ currentPlayer }}</div>
    <div v-if="aiNoMoves" class="no-moves-message">AI has no valid moves!</div>
    <div class="controls animated">
      <div class="button" @click="resetGame">Reset Game</div>
      <div class="button" @click="goBack">Go Back</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: this.initializeBoard(),
      currentPlayer: 'red',
      selectedPiece: null,
      aiPlayer: 'black',
      aiNoMoves: false
    };
  },
  methods: {
    initializeBoard() {
      const board = Array(8).fill(null).map(() => Array(8).fill(null));
      
      // Place black pieces
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 8; col++) {
          if ((row + col) % 2 !== 0) {
            board[row][col] = { color: 'black', isKing: false };
          }
        }
      }
      
      // Place red pieces
      for (let row = 5; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          if ((row + col) % 2 !== 0) {
            board[row][col] = { color: 'red', isKing: false };
          }
        }
      }
      
      return board;
    },
    isSelected(row, col) {
      return this.selectedPiece && this.selectedPiece.row === row && this.selectedPiece.col === col;
    },
    handleCellClick(row, col) {
      // If it's AI's turn, don't allow moves
      if (this.currentPlayer === this.aiPlayer) return;

      if (this.selectedPiece) {
        // Clicking on the same piece deselects it
        if (this.selectedPiece.row === row && this.selectedPiece.col === col) {
          this.selectedPiece = null;
          return;
        }

        // Try to move the piece
        if (this.isValidMove(this.selectedPiece, { row, col })) {
          this.movePiece(this.selectedPiece, { row, col });
          this.selectedPiece = null;
          this.switchPlayer();
          // Add slight delay before AI move
          setTimeout(() => this.aiMove(), 500);
        } else {
          // If clicking on another own piece, select it instead
          if (this.board[row][col] && this.board[row][col].color === this.currentPlayer) {
            this.selectedPiece = { row, col };
          }
        }
      } else {
        // Select piece logic
        if (this.board[row][col] && this.board[row][col].color === this.currentPlayer) {
          this.selectedPiece = { row, col };
        }
      }
    },
    isValidMove(from, to) {
      const piece = this.board[from.row][from.col];
      if (!piece || piece.color !== this.currentPlayer) return false;

      // Check if destination is on the board
      if (to.row < 0 || to.row > 7 || to.col < 0 || to.col > 7) return false;

      const target = this.board[to.row][to.col];
      if (target !== null) return false;

      const rowDiff = to.row - from.row;
      const colDiff = to.col - from.col;
      
      // Check if move is diagonal
      if (Math.abs(rowDiff) !== Math.abs(colDiff)) return false;

      // Direction check for regular pieces
      if (!piece.isKing) {
        if (piece.color === 'red' && rowDiff >= 0) return false;
        if (piece.color === 'black' && rowDiff <= 0) return false;
        // Regular pieces can only move 1 or 2 spaces
        if (Math.abs(rowDiff) > 2) return false;
      }

      // For kings, check the path
      if (piece.isKing && Math.abs(rowDiff) > 1) {
        const rowStep = rowDiff > 0 ? 1 : -1;
        const colStep = colDiff > 0 ? 1 : -1;
        let currentRow = from.row + rowStep;
        let currentCol = from.col + colStep;
        let capturedPiece = null;

        while (currentRow !== to.row) {
          const currentSpace = this.board[currentRow][currentCol];
          if (currentSpace) {
            if (capturedPiece || currentSpace.color === piece.color) {
              return false;
            }
            capturedPiece = { row: currentRow, col: currentCol };
          }
          currentRow += rowStep;
          currentCol += colStep;
        }
        // For kings, allow the move if path is clear or exactly one piece is captured
        return !capturedPiece || Math.abs(rowDiff) === 2;
      }

      // Regular move for non-king pieces
      if (Math.abs(rowDiff) === 1) return true;

      // Capture move for non-king pieces
      if (Math.abs(rowDiff) === 2) {
        const middleRow = from.row + rowDiff / 2;
        const middleCol = from.col + colDiff / 2;
        const middlePiece = this.board[middleRow][middleCol];
        return middlePiece && middlePiece.color !== piece.color;
      }

      return false;
    },
    movePiece(from, to) {
      const piece = this.board[from.row][from.col];
      
      // Move the piece
      this.board[to.row][to.col] = piece;
      this.board[from.row][from.col] = null;

      // Handle capture
      const rowDiff = to.row - from.row;
      const colDiff = to.col - from.col;
      if (Math.abs(rowDiff) === 2) {
        const middleRow = from.row + rowDiff / 2;
        const middleCol = from.col + colDiff / 2;
        this.board[middleRow][middleCol] = null;
      }

      // Handle king promotion
      if ((piece.color === 'red' && to.row === 0) || 
          (piece.color === 'black' && to.row === 7)) {
        piece.isKing = true;
      }
    },
    switchPlayer() {
      this.currentPlayer = this.currentPlayer === 'red' ? 'black' : 'red';
    },
    aiMove() {
      const bestMove = this.minimax(this.board, 3, true);
      if (bestMove && bestMove.from && bestMove.to) {
        this.movePiece(bestMove.from, bestMove.to);
        this.switchPlayer();
        this.aiNoMoves = false;
      } else {
        // Handle case when AI has no valid moves
        this.aiNoMoves = true;
        console.log("AI has no valid moves");
      }
    },
    minimax(board, depth, isMaximizingPlayer, alpha = -Infinity, beta = Infinity) {
      if (depth === 0) {
        return { score: this.evaluateBoard(board) };
      }

      const moves = this.getAllPossibleMoves(board, isMaximizingPlayer ? 'black' : 'red');
      
      // If no moves available, this is very bad for the current player
      if (moves.length === 0) {
        return { score: isMaximizingPlayer ? -1000 : 1000 };
      }

      let bestMove = null;

      if (isMaximizingPlayer) {
        let maxEval = -Infinity;
        for (const move of moves) {
          const newBoard = this.makeMove(board, move);
          const evaluation = this.minimax(newBoard, depth - 1, false, alpha, beta).score;
          if (evaluation > maxEval) {
            maxEval = evaluation;
            bestMove = move;
          }
          alpha = Math.max(alpha, evaluation);
          if (beta <= alpha) break;
        }
        return { ...bestMove, score: maxEval };
      } else {
        let minEval = Infinity;
        for (const move of moves) {
          const newBoard = this.makeMove(board, move);
          const evaluation = this.minimax(newBoard, depth - 1, true, alpha, beta).score;
          if (evaluation < minEval) {
            minEval = evaluation;
            bestMove = move;
          }
          beta = Math.min(beta, evaluation);
          if (beta <= alpha) break;
        }
        return { ...bestMove, score: minEval };
      }
    },
    evaluateBoard(board) {
      let score = 0;
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const piece = board[row][col];
          if (piece) {
            let pieceValue = 10; // Base piece value
            
            // Kings are worth more
            if (piece.isKing) pieceValue = 25;
            
            // Pieces closer to promotion are worth more
            if (!piece.isKing) {
              if (piece.color === 'black') {
                pieceValue += row; // Black pieces want to go down
              } else {
                pieceValue += (7 - row); // Red pieces want to go up
              }
            }

            // Center control bonus
            if (col >= 2 && col <= 5) {
              pieceValue += 2;
            }

            // Add mobility score (number of possible moves)
            const moves = this.getPossibleMovesForPiece(board, { row, col });
            pieceValue += moves.length;

            // Apply color multiplier
            score += piece.color === 'black' ? pieceValue : -pieceValue;
          }
        }
      }
      return score;
    },
    getAllPossibleMoves(board, player) {
      const moves = [];
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const piece = board[row][col];
          if (piece && piece.color === player) {
            const possibleMoves = this.getPossibleMovesForPiece(board, { row, col });
            moves.push(...possibleMoves);
          }
        }
      }
      return moves;
    },
    getPossibleMovesForPiece(board, from) {
      const moves = [];
      const directions = [
        { row: 1, col: 1 },
        { row: 1, col: -1 },
        { row: -1, col: 1 },
        { row: -1, col: -1 }
      ];
      for (const direction of directions) {
        const to = { row: from.row + direction.row, col: from.col + direction.col };
        if (this.isValidMove(from, to)) {
          moves.push({ from, to });
        }
        const captureTo = { row: from.row + 2 * direction.row, col: from.col + 2 * direction.col };
        if (this.isValidMove(from, captureTo)) {
          moves.push({ from, to: captureTo });
        }
      }
      return moves;
    },
    makeMove(board, move) {
      const newBoard = JSON.parse(JSON.stringify(board));
      const piece = newBoard[move.from.row][move.from.col];
      newBoard[move.to.row][move.to.col] = piece;
      newBoard[move.from.row][move.from.col] = null;

      // Handle capturing move
      const rowDiff = Math.abs(move.to.row - move.from.row);
      if (rowDiff === 2) {
        const middleRow = (move.from.row + move.to.row) / 2;
        const middleCol = (move.from.col + move.to.col) / 2;
        newBoard[middleRow][middleCol] = null;
      }

      // Handle king promotion
      if (piece.color === 'red' && move.to.row === 7) {
        piece.isKing = true;
      }
      if (piece.color === 'black' && move.to.row === 0) {
        piece.isKing = true;
      }

      return newBoard;
    },
    resetGame() {
      this.board = this.initializeBoard();
      this.currentPlayer = 'red';
      this.selectedPiece = null;
      this.aiNoMoves = false;
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.checkers-board').classList.add('fade-in');
      document.querySelector('.controls').classList.add('fade-in');
    }, 100);
  }
};
</script>

<style scoped>
.checkers-board {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: 40px solid #333;
  margin: 20px auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.checkers-board.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.row {
  display: flex;
  flex: 1;
}

.cell {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cell.light {
  background-color: #e0c38b;
}

.cell.dark {
  background-color: #8b5a2b;
}

.cell.selected {
  background-color: rgba(255, 255, 0, 0.3);
}

.piece {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s;
}

.piece:hover {
  transform: scale(1.1);
}

.piece.red {
  background-color: #d32f2f;
  border: 2px solid #ff5252;
}

.piece.black {
  background-color: #212121;
  border: 2px solid #484848;
}

.piece.king::after {
  content: '♔';
  position: absolute;
  color: gold;
  font-size: 1.5em;
  line-height: 1;
}

.status {
  text-align: center;
  margin-top: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.status.red {
  color: lightcoral;
}

.status.black {
  color: #948585;
}

.no-moves-message {
  text-align: center;
  margin-top: 1em;
  font-size: 1.2em;
  font-weight: bold;
  color: lightcoral;
  background-color: #f8d7da;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
}

.controls {
  text-align: center;
  margin-top: 1em;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.controls.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.button {
  display: inline-block;
  margin: 0 10px;
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  color: rgb(146, 169, 203);
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
</style>
