var Preloader =(function () {
    "use strict";
    return {
        showPreloader : () =>{
            Notiflix.Loading.Pulse({svgColor:'#ecc53f'});
        },
        hidePreloader : () =>{
            Notiflix.Loading.Remove();
        }
    };
})();

var Message =(function () {
    "use strict";
    return {
        errorMessage : (jqXHR) =>{
            Notiflix.Notify.Failure(jqXHR.status+" " +jqXHR.responseText);
        },
        succesMessage : (message) =>{
            Notiflix.Notify.Success(message);
        }
    };
})();

