$(document).ready(function() {
/*
    $("#sendContact").on("click", function() {
        Preloader.showPreloader();
        detaliiContactService.addContact(sendMessage()).then(function(response) {
            Preloader.hidePreloader();
            Message.succesMessage(response.text);
        });
    });
*/

    let sendMessage = function () {
        return {
                name:$("#name-contact").val(),
                mail:$("#email-contact").val(),
                tel:$("#phone-contact").val(),
                companyName:$("#cmy-name").val(),
                subject:$("#subject-contact").val(),
                msg:$("#message-contact").val(),
        }
    }
});
let contactAction = (function () {
    "use strict";
    return {
        addContact: (data) => {
            data.action ="";
            debugger;
            Preloader.showPreloader();
            detaliiContactService.addContact(contactAction.sendMessage()).then(function(response) {
                Preloader.hidePreloader();
                Message.succesMessage(response.text);
            });

        },
        sendMessage: () => {
            return {
                name:$("#name-contact").val(),
                mail:$("#email-contact").val(),
                tel:$("#phone-contact").val(),
                companyName:$("#cmy-name").val(),
                subject:$("#subject-contact").val(),
                msg:$("#message-contact").val(),
            }
        },

    };
})($);