var CheckFields = {
    $PLAYER1_NAME: $('.player1-name'),
    $PLAYER1_RESULT: $('.player1-result'),
    $PLAYER2_NAME: $('.player2-name'),
    $PLAYER2_RESULT: $('.player2-result'),

    init: function () {
        CheckFields.checkCircleField();
        CheckFields.checkCrossField();
    },

    checkCircleField: function () {
        if ($('#1').parent().hasClass('circle') &&
            $('#2').parent().hasClass('circle') &&
            $('#3').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#4').parent().hasClass('circle') &&
            $('#5').parent().hasClass('circle') &&
            $('#6').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#7').parent().hasClass('circle') &&
            $('#8').parent().hasClass('circle') &&
            $('#9').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#1').parent().hasClass('circle') &&
            $('#4').parent().hasClass('circle') &&
            $('#7').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#2').parent().hasClass('circle') &&
            $('#5').parent().hasClass('circle') &&
            $('#8').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#3').parent().hasClass('circle') &&
            $('#6').parent().hasClass('circle') &&
            $('#9').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#1').parent().hasClass('circle') &&
            $('#5').parent().hasClass('circle') &&
            $('#9').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        } else if ($('#3').parent().hasClass('circle') &&
            $('#5').parent().hasClass('circle') &&
            $('#7').parent().hasClass('circle')) {
            CheckFields.endGame();
            CheckFields.blockFields()

        }
    },

    checkCrossField: function () {
        if ($('#1').parent().hasClass('cross') &&
            $('#2').parent().hasClass('cross') &&
            $('#3').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#4').parent().hasClass('cross') &&
            $('#5').parent().hasClass('cross') &&
            $('#6').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#7').parent().hasClass('cross') &&
            $('#8').parent().hasClass('cross') &&
            $('#9').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#1').parent().hasClass('cross') &&
            $('#4').parent().hasClass('cross') &&
            $('#7').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#2').parent().hasClass('cross') &&
            $('#5').parent().hasClass('cross') &&
            $('#8').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#3').parent().hasClass('cross') &&
            $('#6').parent().hasClass('cross') &&
            $('#9').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()

        } else if ($('#1').parent().hasClass('cross') &&
            $('#5').parent().hasClass('cross') &&
            $('#9').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()
        } else if ($('#3').parent().hasClass('cross') &&
            $('#5').parent().hasClass('cross') &&
            $('#7').parent().hasClass('cross')) {
            CheckFields.endGame2();
            CheckFields.blockFields()
        }
    },

    endGame: function () {
        alert(CheckFields.$PLAYER1_NAME.text() + ' won! :D');
        var integer = Number(CheckFields.$PLAYER1_RESULT.text());
            CheckFields.$PLAYER1_RESULT.html(integer + 1);
        return false;
    },

    endGame2: function () {
        alert(CheckFields.$PLAYER2_NAME.text() + ' won! :D');
        var integer = Number(CheckFields.$PLAYER2_RESULT.text());
        CheckFields.$PLAYER2_RESULT.html(integer + 1);
        return false;
    },


    blockFields: function () {
        GameApp.$GAME_FIELD.css('pointer-events', 'none');
    }

};

$(document).ready(function () {
    // CheckFields.init();
});