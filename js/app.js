jQuery(document).ready(function() {
    jQuery('.button__menu').click(function(){
        jQuery(this).toggleClass('menu-open');
        jQuery('header .cont-menu').toggleClass('open');
        console.log("click");
    });

    $( "a[href^='#']" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
    //addClass, removeClass, each-->jQuery
});