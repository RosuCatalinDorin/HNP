var hnpNewsActions = (function () {
    "use strict";
    return {
        getAllNews: () => {
            Preloader.showPreloader();
            hnpNewsService.getActiveNews().then(function (response) {
                hnpNewsActions.setNewsToPage(newsComponent.creatNews(response));
                Preloader.hidePreloader();
            })
        },
        setNewsToPage: (component) => {
            document.getElementById('allHnpNews').innerHTML = component
        }
    }
})($);