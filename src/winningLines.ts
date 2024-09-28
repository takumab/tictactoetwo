import { Square } from "./tictactoegame";

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
