import { Player, Position, TicTacToeGame } from "../src/tictactoegame";
import { Board } from "../src/board";
import { WinningLines } from "../src/winningLines";

describe("Tic Tac Toe Should", () => {
  let game: TicTacToeGame;
  let board: Board;
  let winningLines: WinningLines;
  beforeEach(() => {
    board = new Board();
    winningLines = new WinningLines();
    game = new TicTacToeGame(board, winningLines);
  });

  test("make 'X' make first move", () => {
    let currentPlayer = game.getCurrentPlayer();
    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'O' place the second mark", () => {
    game.play(Position.TopLeft);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.O);
  });

  test("make 'X' place the third mark", () => {
    game.play(Position.TopLeft);
    game.play(Position.TopMiddle);

    let currentPlayer = game.getCurrentPlayer();

    expect(currentPlayer).toBe(Player.X);
  });

  test("make 'X' winner with 3 marks in row horizontally", () => {
    game.play(Position.TopLeft);
    game.play(Position.CenterLeft);
    game.play(Position.TopMiddle);
    game.play(Position.CenterMiddle);
    game.play(Position.TopRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in row horizontally", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopLeft);
    game.play(Position.BottomLeft);
    game.play(Position.TopMiddle);
    game.play(Position.CenterMiddle);
    game.play(Position.TopRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in second horizontal row", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopLeft);
    game.play(Position.CenterMiddle);
    game.play(Position.BottomLeft);
    game.play(Position.CenterRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in second horizontal row", () => {
    game.play(Position.TopLeft);
    game.play(Position.CenterLeft);
    game.play(Position.BottomLeft);
    game.play(Position.CenterMiddle);
    game.play(Position.TopMiddle);
    game.play(Position.CenterRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in third horizontal row", () => {
    game.play(Position.BottomLeft);
    game.play(Position.CenterLeft);
    game.play(Position.BottomMiddle);
    game.play(Position.TopRight);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in third horizontal row", () => {
    game.play(Position.CenterMiddle);
    game.play(Position.BottomLeft);
    game.play(Position.TopRight);
    game.play(Position.BottomMiddle);
    game.play(Position.CenterLeft);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 marks in first column", () => {
    game.play(Position.TopLeft);
    game.play(Position.BottomMiddle);
    game.play(Position.CenterLeft);
    game.play(Position.TopRight);
    game.play(Position.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 marks in first column", () => {
    game.play(Position.BottomMiddle);
    game.play(Position.TopLeft);
    game.play(Position.TopRight);
    game.play(Position.CenterLeft);
    game.play(Position.CenterRight);
    game.play(Position.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks in second column", () => {
    game.play(Position.TopMiddle);
    game.play(Position.CenterLeft);
    game.play(Position.CenterMiddle);
    game.play(Position.TopRight);
    game.play(Position.BottomMiddle);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive marks in second column", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopMiddle);
    game.play(Position.TopRight);
    game.play(Position.CenterMiddle);
    game.play(Position.CenterRight);
    game.play(Position.BottomMiddle);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks in third column", () => {
    game.play(Position.TopRight);
    game.play(Position.BottomLeft);
    game.play(Position.CenterRight);
    game.play(Position.TopMiddle);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive marks in third column", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopRight);
    game.play(Position.TopMiddle);
    game.play(Position.CenterRight);
    game.play(Position.CenterMiddle);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks diagonally from top left to bottom right", () => {
    game.play(Position.TopLeft);
    game.play(Position.BottomLeft);
    game.play(Position.CenterMiddle);
    game.play(Position.TopMiddle);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive diagonally from top left to bottom right", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopLeft);
    game.play(Position.TopMiddle);
    game.play(Position.CenterMiddle);
    game.play(Position.CenterRight);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("make 'X' winner with 3 consecutive marks diagonally from top right to bottom left", () => {
    game.play(Position.TopRight);
    game.play(Position.TopMiddle);
    game.play(Position.CenterMiddle);
    game.play(Position.BottomRight);
    game.play(Position.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.X);
  });

  test("make 'O' winner with 3 consecutive diagonally from top right to bottom left", () => {
    game.play(Position.CenterLeft);
    game.play(Position.TopRight);
    game.play(Position.TopMiddle);
    game.play(Position.CenterMiddle);
    game.play(Position.CenterRight);
    game.play(Position.BottomLeft);

    let winner = game.getWinner();

    expect(winner).toBe(Player.O);
  });

  test("have game end in a tie", () => {
    game.play(Position.TopMiddle);
    game.play(Position.TopLeft);
    game.play(Position.TopRight);
    game.play(Position.CenterRight);
    game.play(Position.CenterMiddle);
    game.play(Position.BottomLeft);
    game.play(Position.CenterLeft);
    game.play(Position.BottomMiddle);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe("Tie game!");
  });

  test("have game end in a tie with different placement of marks", () => {
    game.play(Position.TopLeft);
    game.play(Position.TopRight);
    game.play(Position.TopMiddle);
    game.play(Position.CenterLeft);
    game.play(Position.CenterRight);
    game.play(Position.CenterMiddle);
    game.play(Position.BottomLeft);
    game.play(Position.BottomMiddle);
    game.play(Position.BottomRight);

    let winner = game.getWinner();

    expect(winner).toBe("Tie game!");
  });
});
