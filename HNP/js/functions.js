function showPreloader() {
    $('.status').fadeIn();
    $('.preloader').fadeIn();
}
function hidePreloader() {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
}
hidePreloader();
