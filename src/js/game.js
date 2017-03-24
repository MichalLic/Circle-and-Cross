var GameApp = {
    $GAME_FIELD: $('.game-field'),
    //variables

    //init
    init: function (){
        GameApp.setIdenticalHeight(GameApp.$GAME_FIELD);
        GameApp.onChoose();
    },

    //functions
    onChoose: function () {
        GameApp.$GAME_FIELD.on('click', function(e){
            e.preventDefault();
            console.log(this);
            GameApp.assignChar(this);
        });
    },
    assignChar: function (gameField) {
        /*@see https://codepen.io/anon/pen/BWVYqV?editors=1100*/
        /*https://codepen.io/JTParrett/pen/pDJAf*/
        GameApp.show(gameField)
    },

    show: function (gameField){
        $(gameField).addClass('show-circle');
    },


    setIdenticalHeight: function(field){
        var widthField = field.width();
        $(window).resize(function(){
           field.height(widthField)
        });
        console.log(widthField);
        console.log(field.height(widthField));
    }



};
$(document).ready(function(){
    GameApp.init()
});