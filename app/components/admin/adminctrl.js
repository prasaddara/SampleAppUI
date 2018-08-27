app.controller("adminCtrl", function ($scope, UpdateadminServiceInfo, $window, toastr) {

  $scope.admin = {
    title: 'test',
    content: 'test',
    loginId: '',
    password: '',
    emailId: '',
    address: '',
    contactnumber: '',
    station: '',
    status: 'y'
  }
  $scope.AdminCall = function (CreateAdmin) {
    debugger;
    $scope.showloader = true;
    UpdateadminServiceInfo.Updateadmin_Service(CreateAdmin).then(function (GetRsltInfo) {
      debugger;
      $scope.showloader = false;
      if (GetRsltInfo.response_code == 0) {
        toastr.success('Successfully added details');
        $window.location.reload();
      }
      else {
        $scope.showloader = false;
        toastr.error('Phone number already exits');

      }

    }, function (error) { })

  };
});





