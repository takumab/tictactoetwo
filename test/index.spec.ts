enum Player {
  X = "X",
  O = "O",
}
enum Square {
  One = 0,
  Two = 1,
  Three = 2,
  Four = 3,
  Five = 4,
  Six = 5,
  Seven = 6,
  Eight = 7,
  Nine = 8,
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

class TicTacToeGame {
  public currentState: State;
  public oState: State;
  public xState: State;
  private squares: string[] = [];

  constructor() {
    this.xState = new PlayerXState(this);
    this.oState = new PlayerOState(this);
    this.currentState = new PlayerXState(this);
  }

  getCurrentPlayer() {
    return this.currentState.currentPlayer;
  }

  play(square: number) {
    this.squares[square] = this.currentState.currentPlayer;
    this.switchPlayer();
  }

  transitionTo(state: State) {
    this.currentState = state;
  }

  getWinner() {
    if (
      this.squares[Square.One] === Player.O &&
      this.squares[Square.Two] === Player.O &&
      this.squares[Square.Three] === Player.O
    ) {
      return Player.O;
    }

    return Player.X;
  }

  private switchPlayer() {
    this.currentState.switchPlayer();
  }
}

describe("Tic Tac Toe Should", () => {
  test("make 'X' make first move", () => {
    let game = new TicTacToeGame();
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    let game = new TicTacToeGame();
    game.play(Square.One);
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    let game = new TicTacToeGame();
    game.play(Square.One);
    game.play(Square.Two);
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    let game = new TicTacToeGame();
    game.play(Square.One);
    game.play(Square.Four);
    game.play(Square.Two);
    game.play(Square.Five);
    game.play(Square.Three);
    let winner = game.getWinner();
    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    let game = new TicTacToeGame();
    game.play(Square.Four);
    game.play(Square.One);
    game.play(Square.Seven);
    game.play(Square.Two);
    game.play(Square.Five);
    game.play(Square.Three);
    let winner = game.getWinner();
    expect(winner).toBe(Player.O);
  });
});
