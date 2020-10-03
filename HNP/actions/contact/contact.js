$(document).ready(function() {
    $("#sendContact").on("click", function() {
        detaliiContactService.addContact(sendMessage()).then(function(response) {
            debugger;
            // ne apare un mesaj de succes care se inchide in cateva secunde
        });
    });
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