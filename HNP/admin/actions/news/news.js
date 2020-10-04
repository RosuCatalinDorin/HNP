$(document).ready(function() {
    $("#button-privew").on("click", function() {
        newsActions.showNewsPriview(newsActions.getHtmlNews());
    });
    $("#button-save").on("click", function() {
        Confirm.confirmHnp("Confirm","Confirmati salvarea?",newsActions.saveNews,function () {});
        newsActions.showNewsPriview(newsActions.getHtmlNews());
    });
});
