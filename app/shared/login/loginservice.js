
app.factory('loginServiceInfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {
        Login_Service: function (loginInfo) {

            debugger;
            var promise = $http.post(webServiceUrl + 'Login', loginInfo, config).then(function (response) {

                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }




    }

});




