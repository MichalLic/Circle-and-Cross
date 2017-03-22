var GameApp = {
    //variables

    //init
    init: function (){
        GameApp.setIdenticalHeight($('.game-field'));
    },

    //functions

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