var hnpNewsActions = (function () {
    "use strict";
    return {
        getAllNews: () => {
            Preloader.showPreloader();
            hnpNewsService.getActiveNews().then(function (response) {
                hnpNewsActions.setNewsToPage('allHnpNews', newsComponent.cardNewsNew(response.allNews));
                hnpNewsActions.setNewsToPage('topTreeNews', newsComponent.createTopNews(response.topTreeNews));
                Preloader.hidePreloader();
            })
        },
        setNewsToPage: (id, component) => {
            document.getElementById(id).innerHTML = component
        },
        getNewsById: (id) => {
            Preloader.showPreloader();
            hnpNewsService.getNewsDetails(id).then(function (response) {
                hnpNewsActions.setNewsToPage('newsDetails',newsComponent.creatNewsDetails(response.newsDetails));
                hnpNewsActions.setNewsToPage('topTreeNews', newsComponent.createTopNews(response.topTreeNews));
                Preloader.hidePreloader();
            })
        }
    }
})($);