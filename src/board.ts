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
      this.findPlayerAt(winningLine[0]) !== undefined &&
      this.findPlayerAt(winningLine[0]) === this.findPlayerAt(winningLine[1]) &&
      this.findPlayerAt(winningLine[1]) === this.findPlayerAt(winningLine[2])
    );
  }

  isNotEmpty(position: Position): boolean {
    return this.squares.has(position);
  }

  isBoardFull() {
    return this.squares.size === 9;
  }
}
