var setAjaxCall = (function() {
  "use strict";
  var tocker = 'BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDIxODQ4MTQsImV4cCI6MTYwMjE4ODQxNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW5AYWRtaW4uY29tIn0.MfpMLyfmMemgq5cexJ_LQj1uOwHVyjxR7iapW-gpk_E3pOPhcjNyjQqbEavcsmO2O1tDsRRpq2jYJR9VFaO_lzdYvO0ELAyTshD6gr7luR9mvOJKs1D1Uf2jikWvAO-V87bZgmq620xroR5i-3iyqmbu5_irsoddaKATL6zzhwk2qaHSl5kS3R9DXVSGjVbQ1DNHUNNQiGfnmIezi935xMDOw4POKRGgnzPIaKzFST_OFh5iIGY8y5oPwFc_tgbpzqPvWdrWacC4mET_IWlgT_kyY8CMtNnuoyFUOZamcBsY4sdmENZXjJiQgsaByZ-YLwxeCtAPHldmn4Ug1BllEjotxngAhoZbG9GIEYCgQlIgED0-LK0ihbH1dhlOAOaJSeKX6cqaQ9DHatkVYoUPjuO7q62yfklP0CfsgwiHYn1Mlkx048CuYRDjf2QP8lAk8cAokukEPnb1yRrYoYapiDNpTFocEjzKUnEScVhRTXFGOP_bTmLtECy9yTbCXQ1BJ7rmmZufcXu2K5snrCzrE5vg_Ha9uRtbZ9FzAafO7X0eKUmBQ0xz45Joh9Tah-lPliZo5tqLdDC_HNR4586c91L7BnV0IfIZfbrSYa34m2ZTkVUa8LDVi63qX0bkMGQKLz3COFskWIH3LybH8miOR_uqb7mOEIRJvKQVRZXe52U'
  var BASE_URL = "http://localhost:81/hnp_api/public";
  var links = {
    getCourses: BASE_URL + "getCursuri.php",
    getNews: BASE_URL + "/api/getNews",
    enrollCourse: BASE_URL + "addToCourse.php",
    sendEmail : BASE_URL + "contact_us.php",
    addContactUs : BASE_URL + "/contact/addContact",
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
