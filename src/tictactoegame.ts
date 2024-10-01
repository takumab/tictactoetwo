import { Board } from "./board";
import { WinningLines } from "./winningLines";

export enum Player {
  X = "X",
  O = "O",
}

export enum Position {
  TopLeft = 0,
  TopMiddle = 1,
  TopRight = 2,
  CenterLeft = 3,
  CenterMiddle = 4,
  CenterRight = 5,
  BottomLeft = 6,
  BottomMiddle = 7,
  BottomRight = 8,
}

export class TicTacToeGame {
  currentPlayer: Player = Player.X;
  board: Board;
  winningLines: WinningLines;

  constructor(board: Board, winningLines: WinningLines) {
    this.board = board;
    this.winningLines = winningLines;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  play(position: Position) {
    this.board.add(this.getCurrentPlayer(), position);
    this.switchPlayer();
  }

  getWinner() {
    let winner = undefined;
    for (const winningLine of this.winningLines.getAllWinningLines()) {
      if (this.board.playerHasA(winningLine.getWinningLine())) {
        winner = this.board.findPlayerAt(winningLine.first);
      }
    }

    if (this.board.isBoardFull()) {
      winner = "Tie game!";
    }

    return winner;
  }

  private switchPlayer() {
    if (this.currentPlayer === Player.X) {
      this.currentPlayer = Player.O;
    } else {
      this.currentPlayer = Player.X;
    }
  }
}
