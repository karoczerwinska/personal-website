function navigation() {
    let flag = 0;
    $('.menu-icon').click(function() {
        if (flag == 0) {
            $('.open').hide();
            $('.close').show();
            $('.line-three, .line-four').css('background-color', '$color1');
            $('.ring').css('z-index', '0');
            $('.overlay-menu-container').fadeIn(800);
            $('body').css('overflow', 'hidden');
            flag = 1;
        } else {
            $('.open').show();
            $('.close').hide();
            $('.overlay-menu-container').fadeOut(800);
            $('body').css('overflow', 'scroll');
            flag = 0;
        }
    })

    $( '.overlay-menu li' ).on("click", function(){
        $('.menu-icon').click();
      });

    $('.nav li').on('click', function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        const $target = $(href)
        $('body').css('overflow', 'scroll');
        $('html, body').animate({
            scrollTop : $target.offset().top
        }, 1000)
    })
}

export { navigation }