import { Board } from "./board";
import { WinningLines } from "./winningLines";

export enum Player {
  X = "X",
  O = "O",
}

// figure out why renaming breaks test
// rename to names that have meaning
export enum Square {
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

// export const Square = {
//   TopLeft: 0,
//   TopMiddle: 1,
//   Two: 2,
//   Three: 3,
//   Four: 4,
//   Five: 5,
//   Six: 6,
//   Seven: 7,
//   Eight: 8,
// };

interface State {
  currentPlayer: Player;
  switchPlayer(): void;
}

class PlayerXState implements State {
  readonly currentPlayer: Player;
  private game: TicTacToeGame;
  constructor(game: TicTacToeGame) {
    this.game = game;
    this.currentPlayer = Player.X;
  }
  switchPlayer(): void {
    console.log(
      `Switching from player ${this.currentPlayer} to ${this.game.oState.currentPlayer}`,
    );
    this.game.transitionTo(this.game.oState);
  }
}

class PlayerOState implements State {
  readonly currentPlayer: Player = Player.O;
  private game: TicTacToeGame;
  constructor(game: TicTacToeGame) {
    this.game = game;
    this.currentPlayer = Player.O;
  }

  switchPlayer(): void {
    console.log(
      `Switching from player ${this.currentPlayer} to ${this.game.xState.currentPlayer}`,
    );
    this.game.transitionTo(this.game.xState);
  }
}

export class TicTacToeGame {
  private currentState: State;
  public oState: State;
  public xState: State;
  squares: Board;
  winningLines: WinningLines;

  constructor(squares: Board, winningLines: WinningLines) {
    this.xState = new PlayerXState(this);
    this.oState = new PlayerOState(this);
    this.currentState = new PlayerXState(this);
    this.squares = squares;
    this.winningLines = winningLines;
  }

  getCurrentPlayer() {
    return this.currentState.currentPlayer;
  }

  play(square: Square) {
    this.squares.add(this.getCurrentPlayer(), square);
    this.switchPlayer();
  }

  transitionTo(state: State) {
    this.currentState = state;
  }

  getWinner() {
    if (this.squares.isGameTied()) {
      return "Tie game!";
    }

    for (const winningLine of this.winningLines.getAllWinningLines()) {
      if (this.playerHasA(winningLine))
        return this.squares.findPlayerAt(winningLine[0]);
    }
  }

  private playerHasA(winningLine: Square[]) {
    return (
      this.squares.findPlayerAt(winningLine[0]) ===
        this.squares.findPlayerAt(winningLine[1]) &&
      this.squares.findPlayerAt(winningLine[1]) ===
        this.squares.findPlayerAt(winningLine[2])
    );
  }

  private switchPlayer() {
    this.currentState.switchPlayer();
  }
}
