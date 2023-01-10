$(document).ready(function(){

    $('.js-select li').on("click", function() {
        $(this).parent().find('li').removeClass('selected');
        $(this).addClass('selected');
        setSelected()
    });

    function setSelected() {
        $('.select--wrapper').each( function(){
            let text = $('.js-select').find('.selected').text();
            $(this).find('input').val(text)
        })
    }
  

    $('.select--wrapper').on('click', function(e){
        e.stopPropagation();
        $(this).toggleClass('is-open');
    });

    $(document).on('click', function(){
        $('.select--wrapper').removeClass('is-open');
        $('.js-burger').removeClass('menu--open');
        $('body').removeClass('no-scroll');
    });

    $("input[type='range']").on('input', function(){
        $(this).parent().parent().find('.js-range').text($(this).val() + '%');
    });

    $('.js-burger').on('click', function(e){
        e.stopPropagation();
        $('body').toggleClass('no-scroll');
        $(this).toggleClass('menu--open')
    })
})