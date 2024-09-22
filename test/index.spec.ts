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

class Squares {
  private squares: Player[] = [];
  static instance() {
    return new Squares();
  }
  put(player: Player, square: Square) {
    this.squares[square] = player;
  }

  findPlayerAt(square: Square) {
    return this.squares[square];
  }
}

class TicTacToeGame {
  public currentState: State;
  public oState: State;
  public xState: State;
  squares: Squares;

  constructor(squares: Squares) {
    this.xState = new PlayerXState(this);
    this.oState = new PlayerOState(this);
    this.currentState = new PlayerXState(this);
    this.squares = squares;
  }

  getCurrentPlayer() {
    return this.currentState.currentPlayer;
  }

  play(square: Square) {
    this.squares.put(this.currentState.currentPlayer, square);
    this.switchPlayer();
  }

  transitionTo(state: State) {
    this.currentState = state;
  }

  getWinner() {
    if (
      this.squares.findPlayerAt(Square.One) === Player.O &&
      this.squares.findPlayerAt(Square.Two) === Player.O &&
      this.squares.findPlayerAt(Square.Three) === Player.O
    ) {
      return Player.O;
    }
    if (
      this.squares.findPlayerAt(Square.One) === Player.X &&
      this.squares.findPlayerAt(Square.Two) === Player.X &&
      this.squares.findPlayerAt(Square.Three) === Player.X
    ) {
      return Player.X;
    }
  }

  private switchPlayer() {
    this.currentState.switchPlayer();
  }
}

describe("Tic Tac Toe Should", () => {
  let game: TicTacToeGame;
  let squares: Squares;
  beforeEach(() => {
    squares = Squares.instance();
    game = new TicTacToeGame(squares);
  });
  test("make 'X' make first move", () => {
    const squares = Squares.instance();
    let game = new TicTacToeGame(squares);
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    let game = new TicTacToeGame(squares);
    game.play(Square.One);
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    let game = new TicTacToeGame(squares);
    game.play(Square.One);
    game.play(Square.Two);
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    let game = new TicTacToeGame(squares);
    game.play(Square.One);
    game.play(Square.Four);
    game.play(Square.Two);
    game.play(Square.Five);
    game.play(Square.Three);
    let winner = game.getWinner();
    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    let game = new TicTacToeGame(squares);
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
