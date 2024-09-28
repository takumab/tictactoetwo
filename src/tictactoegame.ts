export enum Player {
  X = "X",
  O = "O",
}
export enum Square {
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
}

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

export class Squares {
  private squares: Player[] = [];
  static instance() {
    return new Squares();
  }
  add(player: Player, square: Square) {
    this.squares[square] = player;
  }

  findPlayerAt(square: Square) {
    return this.squares[square];
  }
}

export class WinningLines {
  static instance() {
    return new WinningLines();
  }

  getAllWinningLines(): Square[][] {
    return [
      [Square.Zero, Square.One, Square.Two],
      [Square.Three, Square.Four, Square.Five],
      [Square.Six, Square.Seven, Square.Eight],
      [Square.Zero, Square.Three, Square.Six],
    ];
  }
}

export class TicTacToeGame {
  public currentState: State;
  public oState: State;
  public xState: State;
  squares: Squares;
  winningLines: WinningLines;

  constructor(squares: Squares, winningLines: WinningLines) {
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
