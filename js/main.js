$(function(){
    
    var left = 0;
    var duration = 4000;

    setInterval(function(){
        if(left <= -3840) {
            left = 0;
        }

        else {
            left = left - 1920;
        }

        $('#banner > .slider').css('marginLeft', left);

    }, duration)
})