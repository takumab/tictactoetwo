import { Player, Square } from "./tictactoegame";

export class Board {
  private squares: Player[] = [];

  add(player: Player, square: Square) {
    this.squares[square] = player;
  }

  findPlayerAt(square: Square) {
    return this.squares[square];
  }

  playerHasA(winningLine: Square[]) {
    return (
      this.findPlayerAt(winningLine[0]) === this.findPlayerAt(winningLine[1]) &&
      this.findPlayerAt(winningLine[1]) === this.findPlayerAt(winningLine[2])
    );
  }

  isGameTied() {
    // if (this.squares.length === 9) return ;
    return (
      (this.squares[Square.TopLeft] === Player.X &&
        this.squares[Square.TopMiddle] === Player.O &&
        this.squares[Square.TopRight] === Player.X &&
        this.squares[Square.CenterLeft] === Player.O &&
        this.squares[Square.CenterMiddle] === Player.X &&
        this.squares[Square.CenterRight] === Player.O &&
        this.squares[Square.BottomLeft] === Player.X &&
        this.squares[Square.BottomMiddle] === Player.O &&
        this.squares[Square.BottomRight] === Player.X) ||
      (this.squares[Square.TopLeft] === Player.X &&
        this.squares[Square.TopRight] === Player.O &&
        this.squares[Square.TopMiddle] === Player.X &&
        this.squares[Square.CenterLeft] === Player.O &&
        this.squares[Square.CenterRight] === Player.X &&
        this.squares[Square.CenterMiddle] === Player.O &&
        this.squares[Square.BottomLeft] === Player.X &&
        this.squares[Square.BottomMiddle] === Player.O &&
        this.squares[Square.BottomRight] === Player.X)
    );
  }
}
