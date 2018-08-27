app.factory('UpdateviewcustomerServiceInfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };
    return {
        viewcustomer_Service: function () {

            debugger;
            var promise = $http.get(webServiceUrl + 'getAllCustomers').then(function (response) {
                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            });
            return promise;
        }
    }

});





