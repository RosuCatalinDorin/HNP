var setAjaxCall = (function() {
  "use strict";
  var tocker = 'BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDIyNzkzMTksImV4cCI6MTYwMjI4MjkxOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIn0.pa1Nq2rN3iFkXVgDel5MQc7V4v3mXWLo184yBbdMP4xtT7gkaheJMH01vH07hrwlkQqjTgTvnGoE17hlhGF8mTbwfCxu7d_-au_loYvGjgjx4_vrVnXvh0N3Tfb5R6bQn8P844ty-FUE_x7QhdLS29PwQoiSp8iBEFTApPJttgyBkVaiwkM5ot9J8zKdOAR-FtMXkJhEree69eya8gw2XNxnBeOVYIYB2429i_jfbI_w-T0alUpGvu7oHP1571GJsRq6JbhEHIwaISYw4DO2JqxnI6EygNpooIw4qz6MU4WC0GplkCqiiRswBmCLXUkGvCVNBzAsc7GznqKydAT2kHlS7iF9PETHIPBXjE92xEFT8p1ds2NZIRHGX4BMIT5kLXek-ySfSuKns5VN-okfEJeXHSNYqCvt0T8EUjPmNST0xCpymDscWlbjZs9Ti_MU0CogjURN1uxhHCrc7gjjMr1hGuKYQe75fu7tvUpTTclqt3pwk6BqGHaPhFveXzHw5xmsnjutMrgY_NCCmoSxqAMHoRH0AFly1_xqVaG_vHGg6KK0yHt3E7E5TG9CKp94aBUZ7k0tTIU7eOiQWxUy2fN1SRJj81LY4pa3yr_zCfIsKmEzpj5ZEU6gdaWmDlWTa-DuEGAF77qlV2XIXa3vaj5_Jem4yZYhuimFdCB69Hg'
  var BASE_URL = "http://localhost:81/hnp_api/public";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getNews: BASE_URL + "/api/getNews",
    enrollCourse: BASE_URL + "addToCourse.php",
    sendEmail : BASE_URL + "contact_us.php",
    addContactUs : BASE_URL + "/api/addContact",
    saveNews : BASE_URL + "/api/saveNews",
  };
  var params = {
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
