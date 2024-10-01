import { Player, Position } from "./tictactoegame";

export class Board {
  private squares: Map<Position, Player> = new Map();

  add(player: Player, square: Position) {
    this.squares.set(square, player);
  }

  findPlayerAt(square: Position) {
    return this.squares.get(square);
  }

  playerHasA(winningLine: Position[]) {
    return (
      this.squares.get(winningLine[0]) !== undefined &&
      this.squares.get(winningLine[0]) === this.findPlayerAt(winningLine[1]) &&
      this.squares.get(winningLine[1]) === this.findPlayerAt(winningLine[2])
    );
  }

  isBoardFull() {
    return this.squares.size === 9;
  }
}
