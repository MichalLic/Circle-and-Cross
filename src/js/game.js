var GameApp = {
    //variables
    $GAME_FIELD: $('.game-field'),
    $BTN_REVENGE: $('.btn-revenge'),
    $BTN_START: $('.btn-start'),

    //init
    init: function () {
        GameApp.setIdenticalHeight(GameApp.$GAME_FIELD);
        GameApp.onStart();
    },

    //functions
    /**
     * sign field by circle or cross
     */
    onChoose: function () {
        GameApp.$GAME_FIELD.on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('empty')) {
                $(this).addClass('circle').removeClass('empty').siblings().addClass('next-cross').removeClass('empty');
                $(this).css('pointer-events', 'none');
            }
            else if ($(this).hasClass('next-cross')) {
                $(this).addClass('cross').siblings().addClass('next-circle').removeClass('next-cross');
                $(this).css('pointer-events', 'none');
            }
            else {
                $(this).addClass('circle').siblings().addClass('next-cross');
                $(this).css('pointer-events', 'none');
            }
            CheckFields.init();
        })
    },

    /**
     * init game functions
     */
    onStart: function () {
        GameApp.$BTN_START.on('click', function () {
            Players.init();
            GameApp.onChoose();
            GameApp.showButton();
            GameApp.onRevenge();
            GameApp.$BTN_START.addClass('hide');
        })
    },

    /**
     * restart game
     */
    onRevenge: function () {
        GameApp.$BTN_REVENGE.on('click', function () {
            GameApp.$GAME_FIELD.removeClass('next-circle next-cross cross circle');
            GameApp.$GAME_FIELD.css('pointer-events', 'auto');
        })
    },

    /**
     * show button
     */
    showButton: function () {
        GameApp.$BTN_REVENGE.removeClass('hide');
    },

    /**
     * set the same dimensions to game fields
     * @param field
     */
    setIdenticalHeight: function (field) {
        var widthField = field.width();
        $(window).resize(function () {
            field.height(widthField);
        });
        $('.single-field i').css('line-height', widthField + 'px');
        console.log(field.height(widthField));
    }


};
$(document).ready(function () {
    GameApp.init()
});