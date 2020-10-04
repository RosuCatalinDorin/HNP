var setAjaxCall = (function() {
  "use strict";
  var BASE_URL = "http://localhost:81/hnp_api/public";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getNews: BASE_URL + "/news/getNews",
    enrollCourse: BASE_URL + "addToCourse.php",
    sendEmail : BASE_URL + "contact_us.php",
    addContactUs : BASE_URL + "/contact/addContact",
    saveNews : BASE_URL + "/news/saveNews",
  };
  var params = {
    url: "",
    dataType: 'json',
    method: "",
    data: "",
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
    },
    files: ""
  };

  return {
      getAllNews: () => {
          params.method = "GET";
          params.url += links.getNews ;
          return makeAjaxRequest.makeRequest(params).then(function(response) {
              return response;
          });
      },
      sendDataContact: (data) => {
          params.method = "POST";
          params.url = "";
          params.url += links.addContactUs;
          params.data =  JSON.stringify(data);
          return makeAjaxRequest.makeRequest(params).then(function(response) {
              return response;
          });
      },
      saveDataNews: (data) => {
          params.method = "POST";
          params.url = "";
          params.url += links.saveNews;
          params.data =  JSON.stringify(data);
          return makeAjaxRequest.makeRequest(params).then(function(response) {
              return response;
          });
      },
  };

})();
