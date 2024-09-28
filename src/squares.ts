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
}
