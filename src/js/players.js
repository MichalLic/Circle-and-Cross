var Players = {

    init: function () {
        Players.setPlayer1();
        Players.setPlayer2();
    },

    setPlayer1: function () {
        var player1 = prompt('Enter Player 1 nickname!');
        $('.player1-name').html('<b>' +player1 + '</b>:');
        console.log(player1);
    },

    setPlayer2: function () {
        var player2 = prompt('Enter Player 2 nickname!');
        $('.player2-name').html('<b>' +player2 + '</b>:');
        console.log(player2);
    }


};

// $(document).ready(function () {
//     Players.init()
// });