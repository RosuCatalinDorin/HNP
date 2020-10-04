var Preloader = (function () {
    "use strict";
    return {
        showPreloader: () => {
            Notiflix.Loading.Pulse({svgColor: '#ecc53f'});
        },
        hidePreloader: () => {
            Notiflix.Loading.Remove();
        }
    };
})();

var Message = (function () {
    "use strict";
    return {
        errorMessage: (jqXHR) => {
            Notiflix.Notify.Failure(jqXHR.status + " " + jqXHR.responseText);
        },
        succesMessage: (message) => {
            Notiflix.Notify.Success(message);
        }
    };
})();
var Confirm = (function () {
    return {
        confirmHnp: (title,message,yesFunction,noFunction) => {
            Notiflix.Confirm.Show(
                title,
                message,
                'Da',
                'Nu',
                yesFunction,
                noFunction
                );
        }
    }
})();

