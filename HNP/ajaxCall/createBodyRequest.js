const setAjaxCall = (function() {
  "use strict";
  let tocker = "BEARER "+Functions.getCookie("HNP");
  let BASE_URL = "http://localhost:81/hnp_api/public";
  let links = {
    getCourses: BASE_URL + "getCursuri.php",
    getNews: BASE_URL + "/api/getNews",
    getNewsDetails: BASE_URL + "/api/getNewsById/",
    enrollCourse: BASE_URL + "addToCourse.php",
    sendEmail : BASE_URL + "contact_us.php",
    addContactUs : BASE_URL + "/api/addContact",
    saveNews : BASE_URL + "/api/saveNews",
  };
  let params = {
    url: "",
    dataType: 'json',
    method: "",
    data: "",
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Authorization":tocker
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
      getNewsDetails: (id) => {
          params.method = "GET";
          params.url += links.getNewsDetails+id ;
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
