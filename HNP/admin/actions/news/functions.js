var newsActions = (function () {
    "use strict";
    return {
        showNewsPriview: (data) => {
            document.getElementById('previewNews').innerHTML = data
        },
        getHtmlNews: () => {
            return $('#summernote').summernote('code');
        },
        getNewsData: () =>{
            return {
                title:$('#newsTitle').val(),
                content:newsActions.getHtmlNews(),
                status:0
            }
        },
        saveNews: () => {
            Preloader.showPreloader();
            newsService.addNews(newsActions.getNewsData()).then(function (response) {
                Preloader.hidePreloader();
                Message.succesMessage(response.text);
            })
        }
    }
})($);