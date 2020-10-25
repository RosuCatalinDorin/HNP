$(document).ready(function() {
    hnpNewsActions.getNewsById(Functions.getUrlParam(window.location.href,'id'));
});