jQuery(document).ready(function() {
    jQuery('.button__menu').click(function(){
        jQuery(this).toggleClass('menu-open');
        jQuery('header .cont-menu').toggleClass('open');
    });
    //addClass, removeClass, each-->jQuery
});