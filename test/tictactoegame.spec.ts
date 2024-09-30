import { Player, Square, TicTacToeGame } from "../src/tictactoegame";
import { Board } from "../src/board";
import { WinningLines } from "../src/winningLines";

describe("Tic Tac Toe Should", () => {
  let game: TicTacToeGame;
  let squares: Board;
  let winningLines: WinningLines;
  beforeEach(() => {
    squares = new Board();
    winningLines = new WinningLines();
    game = new TicTacToeGame(squares, winningLines);
  });
  test("make 'X' make first move", () => {
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    game.play(Square.TopLeft);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    game.play(Square.TopLeft);
    game.play(Square.TopMiddle);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    game.play(Square.TopLeft);
    game.play(Square.CenterLeft);
    game.play(Square.TopMiddle);
    game.play(Square.CenterMiddle);
    game.play(Square.TopRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopLeft);
    game.play(Square.BottomLeft);
    game.play(Square.TopMiddle);
    game.play(Square.CenterMiddle);
    game.play(Square.TopRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in second horizontal row", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopLeft);
    game.play(Square.CenterMiddle);
    game.play(Square.BottomLeft);
    game.play(Square.CenterRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in second horizontal row", () => {
    game.play(Square.TopLeft);
    game.play(Square.CenterLeft);
    game.play(Square.BottomLeft);
    game.play(Square.CenterMiddle);
    game.play(Square.TopMiddle);
    game.play(Square.CenterRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in third horizontal row", () => {
    game.play(Square.BottomLeft);
    game.play(Square.CenterLeft);
    game.play(Square.BottomMiddle);
    game.play(Square.TopRight);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in third horizontal row", () => {
    game.play(Square.CenterMiddle);
    game.play(Square.BottomLeft);
    game.play(Square.TopRight);
    game.play(Square.BottomMiddle);
    game.play(Square.CenterLeft);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in first column", () => {
    game.play(Square.TopLeft);
    game.play(Square.BottomMiddle);
    game.play(Square.CenterLeft);
    game.play(Square.TopRight);
    game.play(Square.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in first column", () => {
    game.play(Square.BottomMiddle);
    game.play(Square.TopLeft);
    game.play(Square.TopRight);
    game.play(Square.CenterLeft);
    game.play(Square.CenterRight);
    game.play(Square.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks in second column", () => {
    game.play(Square.TopMiddle);
    game.play(Square.CenterLeft);
    game.play(Square.CenterMiddle);
    game.play(Square.TopRight);
    game.play(Square.BottomMiddle);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive marks in second column", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopMiddle);
    game.play(Square.TopRight);
    game.play(Square.CenterMiddle);
    game.play(Square.CenterRight);
    game.play(Square.BottomMiddle);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks in third column", () => {
    game.play(Square.TopRight);
    game.play(Square.BottomLeft);
    game.play(Square.CenterRight);
    game.play(Square.TopMiddle);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive marks in third column", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopRight);
    game.play(Square.TopMiddle);
    game.play(Square.CenterRight);
    game.play(Square.CenterMiddle);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks diagonally from top left to bottom right", () => {
    game.play(Square.TopLeft);
    game.play(Square.BottomLeft);
    game.play(Square.CenterMiddle);
    game.play(Square.TopMiddle);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive diagonally from top left to bottom right", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopLeft);
    game.play(Square.TopMiddle);
    game.play(Square.CenterMiddle);
    game.play(Square.CenterRight);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks diagonally from top right to bottom left", () => {
    game.play(Square.TopRight);
    game.play(Square.TopMiddle);
    game.play(Square.CenterMiddle);
    game.play(Square.BottomRight);
    game.play(Square.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive diagonally from top right to bottom left", () => {
    game.play(Square.CenterLeft);
    game.play(Square.TopRight);
    game.play(Square.TopMiddle);
    game.play(Square.CenterMiddle);
    game.play(Square.CenterRight);
    game.play(Square.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("have game end in a tie", () => {
    game.play(Square.TopLeft);
    game.play(Square.TopMiddle);
    game.play(Square.TopRight);
    game.play(Square.CenterLeft);
    game.play(Square.CenterMiddle);
    game.play(Square.CenterRight);
    game.play(Square.BottomLeft);
    game.play(Square.BottomMiddle);
    game.play(Square.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe("Tie game!");
  });
});
