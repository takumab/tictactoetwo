import { Player, Square, TicTacToeGame } from "../src/tictactoegame";
import { Squares } from "../src/squares";
import { WinningLines } from "../src/winningLines";

describe("Tic Tac Toe Should", () => {
  let game: TicTacToeGame;
  let squares: Squares;
  let winningLines: WinningLines;
  beforeEach(() => {
    squares = Squares.instance();
    winningLines = WinningLines.instance();
    game = new TicTacToeGame(squares, winningLines);
  });
  test("make 'X' make first move", () => {
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    game.play(Square.Zero);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    game.play(Square.Zero);
    game.play(Square.One);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    game.play(Square.Zero);
    game.play(Square.Three);
    game.play(Square.One);
    game.play(Square.Four);
    game.play(Square.Two);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    game.play(Square.Three);
    game.play(Square.Zero);
    game.play(Square.Six);
    game.play(Square.One);
    game.play(Square.Four);
    game.play(Square.Two);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in second horizontal row", () => {
    game.play(Square.Three);
    game.play(Square.Zero);
    game.play(Square.Four);
    game.play(Square.Six);
    game.play(Square.Five);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in second horizontal row", () => {
    game.play(Square.Zero);
    game.play(Square.Three);
    game.play(Square.Six);
    game.play(Square.Four);
    game.play(Square.One);
    game.play(Square.Five);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in third horizontal row", () => {
    game.play(Square.Six);
    game.play(Square.Three);
    game.play(Square.Seven);
    game.play(Square.Two);
    game.play(Square.Eight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in third horizontal row", () => {
    game.play(Square.Four);
    game.play(Square.Six);
    game.play(Square.Two);
    game.play(Square.Seven);
    game.play(Square.Three);
    game.play(Square.Eight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in first column", () => {
    game.play(Square.Zero);
    game.play(Square.Seven);
    game.play(Square.Three);
    game.play(Square.Two);
    game.play(Square.Six);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in first column", () => {
    game.play(Square.Seven);
    game.play(Square.Zero);
    game.play(Square.Two);
    game.play(Square.Three);
    game.play(Square.Five);
    game.play(Square.Six);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks in second column", () => {
    game.play(Square.One);
    game.play(Square.Three);
    game.play(Square.Four);
    game.play(Square.Two);
    game.play(Square.Seven);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive marks in second column", () => {
    game.play(Square.Three);
    game.play(Square.One);
    game.play(Square.Two);
    game.play(Square.Four);
    game.play(Square.Five);
    game.play(Square.Seven);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });
});
