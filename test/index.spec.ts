enum Player {
    X = 'X'
}

class TicTacToeGame {
    getCurrentPlayer() {
        return Player.X
    }
}

describe('Tic Tac Toe Should', () => {
    test("make 'X' the first player", () => {
        let game = new TicTacToeGame();
        let currentPlayer = game.getCurrentPlayer()
        expect(currentPlayer).toBe(Player.X);
    })
});
