app.factory('UpdateeditcustomerServiceinfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {
        editcustomer_Service: function (updateCustomer) {
            var promise = $http.put(webServiceUrl + 'updateCustomer/' + updateCustomer.mobile, updateCustomer, config).then(function (response) {
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }



    }

});




