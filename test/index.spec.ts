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

  length() {
    return this.squares.length;
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
    this.squares.put(this.getCurrentPlayer(), square);
    this.switchPlayer();
  }

  transitionTo(state: State) {
    this.currentState = state;
  }

  getWinner() {
    const arrayOfWinningLines: Square[][] = [
      [Square.One, Square.Two, Square.Three],
      [Square.Four, Square.Five, Square.Six],
    ];

    for (const winningLine of arrayOfWinningLines) {
      if (this.playerHas(winningLine)) {
        return this.squares.findPlayerAt(winningLine[0]);
      }
    }
  }

  private playerHas(winningLine: Square[]) {
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

describe("Tic Tac Toe Should", () => {
  let game: TicTacToeGame;
  let squares: Squares;
  beforeEach(() => {
    squares = Squares.instance();
    game = new TicTacToeGame(squares);
  });
  test("make 'X' make first move", () => {
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    game.play(Square.One);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    game.play(Square.One);
    game.play(Square.Two);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    game.play(Square.One);
    game.play(Square.Four);
    game.play(Square.Two);
    game.play(Square.Five);
    game.play(Square.Three);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    game.play(Square.Four);
    game.play(Square.One);
    game.play(Square.Seven);
    game.play(Square.Two);
    game.play(Square.Five);
    game.play(Square.Three);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in second horizontal row", () => {
    game.play(Square.Four);
    game.play(Square.One);
    game.play(Square.Five);
    game.play(Square.Seven);
    game.play(Square.Six);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });
});
