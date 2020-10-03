var setAjaxCall = (function() {
  "use strict";
  var BASE_URL = "http://localhost:81/hnp_api/public";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getCourseById: BASE_URL + "getCours.php?CURS_ID=",
    enrollCourse: BASE_URL + "addToCourse.php",
    sendEmail : BASE_URL + "contact_us.php",
    addContactUs : BASE_URL + "/contact/addContact",
  };
  var params = {
    url: "",
    dataType: 'json',
    method: "",
    data: "",
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Request-Headers":"access-control-allow-origin",
    },
    files: ""
  };

  return {
    getCoursesDAL: () => {
      params.method = "GET";
      params.url += links.getCourses;
      return makeAjaxRequest.makeRequest(params).then(function(response) {
        return response;
      });
    },

    getCourseByIdDAL: (id) => {
      params.method = "GET";
      params.url += links.getCourseById + id;
      return makeAjaxRequest.makeRequest(params).then(function(response) {
        return response;
      });
    },

    enrollCourseDAL: (data) => {
        params.method = "POST";
        params.url = "";
        params.url += links.enrollCourse;
        params.data = data;
        return makeAjaxRequest.makeRequest(params).then(function(response) {
          return response;
        });
    },

    sendEmailDAL: (data) => {
        params.method = "POST";
        params.url = "";
        params.url += links.sendEmail;
        params.data =  JSON.stringify(data);
        return makeAjaxRequest.makeRequest(params).then(function(response) {
          return response;
        });
    },
      sendDataContact: (data) => {
        debugger;
          params.method = "POST";
          params.url = "";
          params.url += links.addContactUs;
          params.data =  JSON.stringify(data);
          return makeAjaxRequest.makeRequest(params).then(function(response) {
              return response;
          });
      },
  };
})();
