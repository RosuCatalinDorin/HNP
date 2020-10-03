$(document).ready(function() {
    $("#button-privew").on("click", function() {
        showPriview(getHtmlNews())
    });
    let showPriview = function (code) {
        document.getElementById('previewNews').innerHTML = code
    };
    let getHtmlNews = function () {
        return $('#summernote').summernote('code');
    }
});