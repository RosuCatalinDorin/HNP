var hnpNewsService = (function () {
    "use strict";
    return {
        getActiveNews: (data) => {
            return setAjaxCall.getAllNews(data).then(function(response) {
                return response;
            })
        },
        getNewsDetails: (id) => {
            return setAjaxCall.getNewsDetails(id).then(function(response) {
                return response;
            })
        },
    }
})($);