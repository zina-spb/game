$(document).ready(function(){
    $('li').click(function() {
    $('.change').removeClass('change');
        $(this).addClass('pink');
    });
});
