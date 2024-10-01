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

interface IPlayer {
  currentPlayer: Player;
  switchPlayer(): void;
}

export class Players implements IPlayer {
  readonly currentPlayer: Player;
  x: Player;
  o: Player;
  constructor(x: Player, o: Player) {
    this.x = x;
    this.o = o;
    this.currentPlayer = Player.X;
  }

  switchPlayer(): void {
    throw new Error("Method not implemented.");
  }
}

class PlayerXState implements IPlayer {
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

class PlayerOState implements IPlayer {
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
  private currentState: IPlayer;
  public oState: IPlayer;
  public xState: IPlayer;
  board: Board;
  winningLines: WinningLines;
  players: Players;

  constructor(board: Board, winningLines: WinningLines, players: Players) {
    this.xState = new PlayerXState(this);
    this.oState = new PlayerOState(this);
    this.players = players;
    this.currentState = new PlayerXState(this);
    this.board = board;
    this.winningLines = winningLines;
  }

  getCurrentPlayer() {
    return this.currentState.currentPlayer;
  }

  play(position: Position) {
    this.board.add(this.getCurrentPlayer(), position);
    this.switchPlayer();
  }

  transitionTo(state: IPlayer) {
    this.currentState = state;
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
    this.currentState.switchPlayer();
  }
}
