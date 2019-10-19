function works() {
    $('#img1').mouseenter(function() {
        $('#img1').removeClass('grayscale');
    })
    $('#img1').mouseleave(function() {
        $('#img1').addClass('grayscale');
    })
    $('#img2').mouseenter(function() {
        $('#img2').removeClass('grayscale');
    })
    $('#img2').mouseleave(function() {
        $('#img2').addClass('grayscale');
    })
    $('#img3').mouseenter(function() {
        $('#img3').removeClass('grayscale');
    })
    $('#img3').mouseleave(function() {
        $('#img3').addClass('grayscale');
    })
    $('#img4').mouseenter(function() {
        $('#img4').removeClass('grayscale');
    })
    $('#img4').mouseleave(function() {
        $('#img4').addClass('grayscale');
    })
}

export { works }