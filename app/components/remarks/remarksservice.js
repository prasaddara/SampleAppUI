app.factory('Updateremarksserviceinfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {
        remarks_Service: function (addRemarks) {

            debugger;
            var promise = $http.post(webServiceUrl + 'addRemarks', addRemarks, config).then(function (response) {

                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }



    }

});





