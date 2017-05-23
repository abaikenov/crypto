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
        $(that.data('target'))
            .css('display', 'block')
            .animate({opacity: 1}, 200);
    });

    $('.modal-close').click( function(){
        $('.fixed-overlay')
            .animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                }
            );
    });

    eventsViewFixForMobile();
    $(window).resize(function () {
        eventsViewFixForMobile();
    });
});

function eventsViewFixForMobile() {
    if($( window ).width() <= 555) {
        $('.event-summary').each(function () {
            var that = $(this);
            var sum = that.find('.event-sum');
            var body = that.find('.event-body');
            body.after(sum);
        })
    } else {
        $('.event-summary').each(function () {
            var that = $(this);
            var sum = that.find('.event-sum');
            that.append(sum);
        })
    }
}