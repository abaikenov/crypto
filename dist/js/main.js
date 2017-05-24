/**
 * Created by Amirlan on 22.05.2017.
 */
$(document).ready(function () {
    $('.toggle-menu').click(function (e) {
        e.preventDefault();
        var nav = $(this).next('.nav');

        nav.slideToggle(500, function () {
            nav.toggleClass('show');
            nav.removeAttr('style');
        });
    });

    $('.filter').each(function () {
        var that = $(this);
        that.find('.filter-toggle').click(function (e) {
            e.preventDefault();
            that.find('form').slideToggle(500, function () {
                that.toggleClass('form-hide');
                $(this).removeAttr('style');
            });
        });
    });

    $('.profile').each(function () {
        var that = $(this);
        that.find('.extends-toggle').click(function (e) {
            e.preventDefault();
            that.find('.extends').slideToggle(500, function () {
                that.toggleClass('profile-hide');
            });
        });
    });

    $('[data-toggle="modal"]').click(function (event) {
        var that = $(this);
        event.preventDefault();
        $(that.data('target'))
            .css('display', 'block')
            .animate({opacity: 1}, 200);
    });

    $('.modal-close').click(function () {
        $('.fixed-overlay')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                }
            );
    });

    $('.period').each(function () {
        var that = $(this);
        that.find('.icon-calendar').click(function (e) {
            e.preventDefault();
            var items = $('.period-items');
            items.show();
            items.find('.level-1').show();
            items.find('.level-2').hide();
        })
    });

    $('.period-items').each(function () {
        var that = $(this);
        that.find('.period-items-level li').click(function () {
            if($(this).data('target') !== 'level-2') {
                $('.period').find('[name="period"]').val($(this).text());
                that.hide();
            } else {
                that.find('.level-1').hide();
                that.find('.level-2').show();
            }
        })
    });

    $('.event').each(function () {
        var that = $(this);
        that.find('.event-summary').click(function () {
            that.find('.event-details').slideToggle();
        })
    });

    fixViewForMobile();
    $(window).resize(function () {
        fixViewForMobile();
    });
});

function fixViewForMobile() {
    if ($(window).width() <= 568) {
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

    if ($(window).width() <= 768) {
        $('.history').each(function () {
            var that = $(this);
            var h3 = that.find('h3');
            that.prepend(h3);
        })
    } else {
        $('.history').each(function () {
            var that = $(this);
            var h3 = that.find('h3');
            that.find('.block').prepend(h3);
        })
    }
}