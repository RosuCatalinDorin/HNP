var newsService = (function() {
    "use strict";

    return {
        addNews: (data) => {
            return setAjaxCall.saveDataNews(data).then(function(response) {
                return response;
            })
        },

    };
})($);
