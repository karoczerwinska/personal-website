function navigation() {
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