enum Player {
  X = "X",
  O = "O",
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
    this.game.setState(this.game.oState);
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
    this.game.setState(this.game.xState);
  }
}

class TicTacToeGame {
  public currentState: State;
  public oState: State;
  public xState: State;

  constructor() {
    this.xState = new PlayerXState(this);
    this.oState = new PlayerOState(this);
    this.currentState = new PlayerXState(this);
  }

  getCurrentPlayer() {
    return this.currentState.currentPlayer;
  }

  play() {
    this.switchPlayer();
  }

  private switchPlayer() {
    this.currentState.switchPlayer();
  }

  setState(state: State) {
    this.currentState = state;
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
    game.play();
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    let game = new TicTacToeGame();
    game.play();
    game.play();
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });
});
