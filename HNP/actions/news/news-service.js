var hnpNewsService = (function () {
    "use strict";
    return {
        getActiveNews: (data) => {
            return setAjaxCall.getAllNews(data).then(function(response) {
                return response;
            })
        },
    }
})($);