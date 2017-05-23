/**
 * Created by Amirlan on 22.05.2017.
 */
$(document).ready(function() {
    $('.toggle-menu').click(function (e) {
        e.preventDefault();
        $(this).next('.nav').toggleClass('show');
    });

    $('.profile').each(function () {
        var that = $(this);
        that.find('.extends-toggle').click(function (e) {
            e.preventDefault();
            that.toggleClass('profile-hide');
        });
    });

    $('[data-toggle="modal"]').click( function(event){
        var that = $(this);
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $(that.data('target'))
                    .css('display', 'block')
                    .animate({opacity: 1, top: '35%'}, 200);
            });
    });

    $('.modal-close, #overlay').click( function(){
        $('.modal')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});