app.controller("editcustomerCtrl", function ($scope, UpdateeditServiceInfo, $window, toastr) {

    $scope.edit = {
        mobile: ''

    }
    $scope.EditcustomerCall = function (CreateAdmin) {
        debugger;
        UpdateeditServiceInfo.Updateedit_Service(CreateAdmin).then(function (GetRsltInfo) {
            debugger;
            if (GetRsltInfo.response_code == 0) {
                toastr.success('Successfully added details');
            }
            else {
                toastr.error('Phone number already exits');
            }

        }, function (error) { })

    };
});





