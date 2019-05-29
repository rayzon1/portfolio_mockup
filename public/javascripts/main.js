const navs = $('.nav-item')

$('.nav-item').on('click', function() {
    $(this)
        .children()
        .addClass('active')
    $(this)
        .prevAll()
        .children()
        .removeClass('active') 
    $(this)
        .nextAll()
        .children()
        .removeClass('active')

})
