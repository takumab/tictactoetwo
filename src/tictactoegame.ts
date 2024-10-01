import { Board } from "./board";
import { WinningLines } from "./winningLines";

export enum Player {
  X,
  O,
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
  private currentPlayer: Player = Player.X;
  private board: Board;
  private winningLines: WinningLines;

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
    for (const winning of this.winningLines.getAllWinningLines()) {
      if (this.board.playerHasA(winning.line)) {
        winner = this.board.findPlayerAt(winning.line[0]);
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
      return;
    }
    this.currentPlayer = Player.X;
  }
}
