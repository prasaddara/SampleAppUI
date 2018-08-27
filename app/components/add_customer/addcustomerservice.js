app.factory('UpdateaddcustomerServiceinfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {
        addcustomer_Service: function (addCustomer) {

            debugger;
            var promise = $http.post(webServiceUrl + 'addCustomer', addCustomer, config).then(function (response) {

                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }



    }

});


