app.controller("homectrl", function ($scope, $scope, $state, $localStorage, $window, UpdateviewcustomerServiceInfo, toastr, UpdatesviewcustomerServiceInfo, UpdatesviewcustomerServiceInfo) {



  debugger;
  UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function (GetRsltInfo) {


    if (GetRsltInfo.response_code == 0) {
      $localStorage.viewcustomres = GetRsltInfo.result_object;

    }
    else {

    }

  }, function (error) { })










});