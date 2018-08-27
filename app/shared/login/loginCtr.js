
app.controller("Loginctrl", function ($scope, $window, $state, loginServiceInfo, toastr) {
    debugger;
    $scope.login = {
        password: '',
        emailId: ''
    }
    $scope.logincall = function (login) {
        debugger;
        $scope.showloader = true;
        loginServiceInfo.Login_Service(login).then(function (data) {
            debugger;
            $scope.showloader = false;
            if (data.response_code == 0) {
                //                       toastr.success('login successfully ');
                $state.go('menuList.home');
            }
            else {
                $scope.showloader = false;
                toastr.error('Login failed');
            }

        }, function (error) {

        });

    };

});


