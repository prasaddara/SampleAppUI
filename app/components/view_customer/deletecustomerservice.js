app.factory('UpdatesviewcustomerServiceInfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };
    return {
        deleterow: function (customer) {

            debugger;
            var promise = $http.delete(webServiceUrl + 'deleteCustomer/' + customer).then(function (response) {
                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            });
            return promise;
        },

        deleteRemark: function (remarks) {
            var promise = $http.delete(webServiceUrl + 'deleteRemarks/' + remarks).then(function (response) {
                return response.data;
            }, function (error) {

            });
            return promise;
        },
        updateStatus: function (updateStatus) {
            debugger;
            var promise = $http.put(webServiceUrl + 'updateStatus/' + updateStatus.mobile + '/' + updateStatus.id, updateStatus, config).then(function (response) {

                return response.data;
            }, function (error) {

            });
            return promise;
        },


    }



});


