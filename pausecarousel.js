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