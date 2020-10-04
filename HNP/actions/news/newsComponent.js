var newsComponent = (function () {
    let allNews ="";
    return {
        creatNews: (response) => {
            response.forEach(function (news) {
                allNews +='<div class="news-list-block">';
                allNews +='<h4>'+news.title+'</h4>';
                allNews +=news.content;
                allNews +='</div>';
            });
            return allNews;
        }
    }
})($);