app.factory('UpdateadminServiceInfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {

        Updateadmin_Service: function (CreateAdmin) {

            debugger;
            var promise = $http.post(webServiceUrl + 'CreateAdmin', CreateAdmin, config).then(function (response) {

                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }



    }

});