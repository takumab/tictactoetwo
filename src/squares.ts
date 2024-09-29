import { Player, Square } from "./tictactoegame";

export class Squares {
  private squares: Player[] = [];

  static instance() {
    return new Squares();
  }

  add(player: Player, square: Square) {
    this.squares[square] = player;
  }

  findPlayerAt(square: Square) {
    return this.squares[square];
  }

  isGameTied() {
    return (
      this.squares[Square.Zero] === Player.X &&
      this.squares[Square.One] === Player.O &&
      this.squares[Square.Two] === Player.X &&
      this.squares[Square.Three] === Player.O &&
      this.squares[Square.Four] === Player.X &&
      this.squares[Square.Five] === Player.O &&
      this.squares[Square.Six] === Player.X &&
      this.squares[Square.Seven] === Player.O &&
      this.squares[Square.Eight] === Player.X
    );
  }
}
