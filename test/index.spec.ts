enum Player {
    X = 'X',
    O = 'O',
}

class TicTacToeGame {
    private currentPlayer: Player = Player.X;
    getCurrentPlayer() {
        return this.currentPlayer
    }

    play() {
        this.switchPlayer();
    }

    private switchPlayer() {
        if (this.currentPlayer === Player.X) {
            this.currentPlayer = Player.O
        }
    }
}

describe('Tic Tac Toe Should', () => {
    test("make 'X' the first player", () => {
        let game = new TicTacToeGame();
        let currentPlayer = game.getCurrentPlayer()
        expect(currentPlayer).toBe(Player.X);
    })

    test("make 'O' the second player", () => {
        let game = new TicTacToeGame();
        game.play()
        let currentPlayer = game.getCurrentPlayer()
        expect(currentPlayer).toBe(Player.O);
    })
});
