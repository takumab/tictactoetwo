import { Square } from "./tictactoegame";

export class WinningLines {
  getAllWinningLines(): Square[][] {
    return [
      [Square.TopLeft, Square.TopMiddle, Square.TopRight],
      [Square.CenterLeft, Square.CenterMiddle, Square.CenterRight],
      [Square.BottomLeft, Square.BottomMiddle, Square.BottomRight],
      [Square.TopLeft, Square.CenterLeft, Square.BottomLeft],
      [Square.TopMiddle, Square.CenterMiddle, Square.BottomMiddle],
      [Square.TopRight, Square.CenterRight, Square.BottomRight],
      [Square.TopLeft, Square.CenterMiddle, Square.BottomRight],
      [Square.TopRight, Square.CenterMiddle, Square.BottomLeft],
    ];
  }
}
