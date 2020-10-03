var detaliiContactService = (function() {
    "use strict";

    return {
        addContact: (data) => {
            return setAjaxCall.sendDataContact(data).then(function(response) {
                return response;
            });
        },

    };
})($);
