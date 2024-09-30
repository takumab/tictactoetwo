import { Player, Square } from "./tictactoegame";

export class Board {
  private squares: Player[] = [];

  add(player: Player, square: Square) {
    this.squares[square] = player;
  }

  findPlayerAt(square: Square) {
    return this.squares[square];
  }

  isGameTied() {
    return (
      this.squares[Square.TopLeft] === Player.X &&
      this.squares[Square.TopMiddle] === Player.O &&
      this.squares[Square.TopRight] === Player.X &&
      this.squares[Square.CenterLeft] === Player.O &&
      this.squares[Square.CenterMiddle] === Player.X &&
      this.squares[Square.CenterRight] === Player.O &&
      this.squares[Square.BottomLeft] === Player.X &&
      this.squares[Square.BottomMiddle] === Player.O &&
      this.squares[Square.BottomRight] === Player.X
    );
  }
}
