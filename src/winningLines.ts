import { Position } from "./tictactoegame";

export class WinningLine {
  public first: Position;
  public second: Position;
  public third: Position;
  constructor(first: Position, second: Position, third: Position) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  getWinningLine() {
    return [this.first, this.second, this.third];
  }
}

export class WinningLines {
  getAllWinningLines(): WinningLine[] {
    return [
      new WinningLine(Position.TopLeft, Position.TopMiddle, Position.TopRight),
      new WinningLine(
        Position.CenterLeft,
        Position.CenterMiddle,
        Position.CenterRight,
      ),
      new WinningLine(
        Position.BottomLeft,
        Position.BottomMiddle,
        Position.BottomRight,
      ),
      new WinningLine(
        Position.TopLeft,
        Position.CenterLeft,
        Position.BottomLeft,
      ),
      new WinningLine(
        Position.TopMiddle,
        Position.CenterMiddle,
        Position.BottomMiddle,
      ),
      new WinningLine(
        Position.TopRight,
        Position.CenterRight,
        Position.BottomRight,
      ),
      new WinningLine(
        Position.TopLeft,
        Position.CenterMiddle,
        Position.BottomRight,
      ),
      new WinningLine(
        Position.TopRight,
        Position.CenterMiddle,
        Position.BottomLeft,
      ),
    ];
  }
}
