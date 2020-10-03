var makeAjaxRequest = (function($) {
    "use strict";
    return {
         makeRequest: function (params) {
            return $.ajax({
                url: params.url,
                method: params.method,
                data: params.data,
                headers: params.headers, 
                files: params.files
            }).done(response => {
                return response;
            }).fail((jqXHR) => {
                Preloader.hidePreloader();
                Message.errorMessage(jqXHR);
            });
        }
    }
}($));