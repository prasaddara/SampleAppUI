app.factory('Updateeditcustomerremarksserviceinfo', function ($http) {
    var webServiceUrl = "http:localhost:8000/";
    var config = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    return {
        editremarks_Service: function (updateRemarks) {

            debugger;
            var promise = $http.put(webServiceUrl + 'updateRemarks/' + updateRemarks.mobile + '/' + updateRemarks.remarkId, updateRemarks, config).then(function (response) {

                debugger;
                console.log('Response -- ' + response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }



    }

});





