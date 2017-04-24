var Players = {

    init: function () {
        Players.setPlayer1();
        Players.setPlayer2();
    },

    /**
     * get first player prompt value
     */
    setPlayer1: function () {
        var player1 = prompt('Enter Player 1 nickname!');
        $('.player1-name').html('<b>' + player1 + ': </b>');
    },

    /**
     * get second player prompt value
     */
    setPlayer2: function () {
        var player2 = prompt('Enter Player 2 nickname!');
        $('.player2-name').html('<b>' + player2 + ': </b>');
    }


};