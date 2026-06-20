(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    // Card media is a fixed height (see theme.css), but relayout once everything
    // has loaded as a safety net for slow/lazy images.
    $(window).on('load', function(){ $projects.isotope('layout'); });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

    // Touch screens have no hover, so the spec panels above are unreachable.
    // On hover-less devices, let a tap toggle a card's spec panel (and close any
    // other open one). Delegated so it survives Isotope filter/relayout.
    function hideSpec($card){
        $card.removeClass('spec-open');
        $card.find('.card-overlay').css({'top':'0'});
        $card.find('.card-hover').css({'top':'100%'});
    }
    function showSpec($card){
        $card.addClass('spec-open');
        $card.find('.card-overlay').css({'top':'-100%'});
        $card.find('.card-hover').css({'top':'0'});
    }
    if (window.matchMedia && window.matchMedia('(hover: none)').matches){
        $('body').addClass('is-touch');
        $('.projects').on('click', '.card', function(){
            var $card = $(this);
            var isOpen = $card.hasClass('spec-open');
            $('.card.spec-open').each(function(){ hideSpec($(this)); });
            if (!isOpen) showSpec($card);
        });
    }

})(jQuery);