var GameApp = {
    $GAME_FIELD: $('.game-field'),
    //variables

    //init
    init: function () {
        GameApp.setIdenticalHeight(GameApp.$GAME_FIELD);
        GameApp.onStart();
    },

    //functions
    onChoose: function () {
        GameApp.$GAME_FIELD.on('click', function (e) {
            e.preventDefault();
            console.log(this);

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
            // GameApp.assignChar(this);
        })
    },

    onStart: function () {
      $('.btn-start').on('click', function () {
          Players.init();
          GameApp.onChoose();
          GameApp.onRevenge();
      })
    },

    onRevenge: function () {
        $('.btn-revenge').on('click', function () {
           GameApp.$GAME_FIELD.removeClass('next-circle next-cross cross circle');
           GameApp.$GAME_FIELD.css('pointer-events', 'auto');
        })
    },


    // assignChar: function (gameField) {
        /*@see https://codepen.io/anon/pen/BWVYqV?editors=1100*/
        /*https://codepen.io/JTParrett/pen/pDJAf*/
        // GameApp.show(gameField)
    // },

    // show: function (gameField) {
    //     $(gameField).addClass('show-circle');
    // },


    setIdenticalHeight: function (field) {
        var widthField = field.width();
        $(window).resize(function () {
            field.height(widthField)
        });
        console.log(widthField);
        console.log(field.height(widthField));
    }


};
$(document).ready(function () {
    GameApp.init()
});