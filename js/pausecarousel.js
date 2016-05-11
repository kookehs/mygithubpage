var overiFrame = false;

$('#thecarousel video').hover( function() {
    overiFrame = true;
}, function() {
    overiFrame = false;
});

$(window).blur( function() {
    if(overiFrame){
        $('#thecarousel').carousel('pause');
    }

});

function pauseCarousel(){
    $('#thecarousel').carousel('pause');
}

function playCarousel(){
    $('#thecarousel').carousel('play');
    /*if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }else if (document.webkitFullscreen) {
         console.log("exploere");
        document.webkitExitFullscreen();
    }else if (window.fullScreen) {
         console.log("chrome");
        window.fullscreen();
    }*/
    //http://stackoverflow.com/questions/19357854/html5-exiting-video-fullscreen
    //window.innerHeight == screen.height fullscreen check
    //https://www.youtube.com/watch?v=V8_wEZD160g make custom video player controls
}
