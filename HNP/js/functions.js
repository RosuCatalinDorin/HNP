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

var Functions = (function () {
    return {
        getCookie: (cname) =>{
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
        },
        getUrlParam: (url,paramName) =>{
            let urlObj = new URL(url);
            debugger;
            return urlObj.searchParams.get(paramName)

        }
    }
}())
