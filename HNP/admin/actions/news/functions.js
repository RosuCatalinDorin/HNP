var newsActions = (function () {
    "use strict";
    return {
        showNewsPriview: (data,cardDetails) => {
            document.getElementById('newsCardPresent').innerHTML = newsComponent.cardNewsNew(cardDetails);
            document.getElementById('previewNews').innerHTML = data;

        },
        getHtmlNews: () => {
            return $('#summernote').summernote('code');
        },
        getCardNewsDetails:() =>{
            return [{
                title:$('#newsTitle').val(),
                description:$('#newsDesc').val(),
                id:"idTest",
                views:0,
                img_path:$('.file-upload-image').attr('src')
            }]
       },
        getNewsData: () =>{
            return {
                title:$('#newsTitle').val(),
                content:newsActions.getHtmlNews(),
                description:$('#newsDesc').val(),
                img_path:$('.file-upload-image').attr('src'),
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