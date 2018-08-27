app.filter('offset', function () {
  return function (input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});
app.controller("viewCustomerctrl", function ($scope, $scope, $state, $rootScope, $localStorage, $window, UpdateviewcustomerServiceInfo, toastr, UpdatesviewcustomerServiceInfo, UpdatesviewcustomerServiceInfo, UpdatesviewcustomerServiceInfo) {
  alert('hii');
  $scope.viewcustomresPerPage = 5;
  $scope.currentPage = 0;
  $scope.viewcustomres = [];

  for (var i = 0; i < 50; i++) {
    $scope.viewcustomres.push({
      //      id: i, name: "name "+ i, description: "description " + i
    });
  }

  $scope.prevPage = function () {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function () {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function () {
    return Math.ceil($scope.viewcustomres.length / $scope.viewcustomresPerPage) - 1;
  };

  $scope.nextPage = function () {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function () {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };


  $scope.disabled = true;
  $scope.close = function (status) {
    debugger;
    $scope.updateStatus = {};

    $scope.updateStatus.status = "N";
    $scope.updateStatus.id = status._id;
    $scope.updateStatus.mobile = $localStorage.customermobile;
    UpdatesviewcustomerServiceInfo.updateStatus($scope.updateStatus).then(function (GetRsltInfo) {
      debugger;

      $scope.showloader = false;
      if (GetRsltInfo.response_code == 0) {
        toastr.success('Update successfully');
        UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function (GetRsltInfo) {

          $scope.showloader = false;
          if (GetRsltInfo.response_code == 0) {
            $scope.viewcustomres = GetRsltInfo.result_object;
            for (i = 0; i < $scope.viewcustomres.length; i++) {

              if ($scope.viewcustomres[i]._id === $scope.remarkslist._id) {
                $scope.remarkslist = $scope.viewcustomres[i];
                for (var j = 0; j < $scope.remarkslist.remarks.length; j++) {
                  if ($scope.remarkslist.remarks[j].status == "N") {
                    $scope.remarkslist.remarks[j].checkstatus = true;
                  }
                  else {
                    $scope.remarkslist.remarks[j].checkstatus = false;
                  }
                }
              }

            }

          }
          else {

          }

        }, function (error) { })

      }
      else {
        $scope.showloader = false;
        toastr.error('Update failure');

      }
    }, function (error) { })


    $scope.disabled = !$scope.disabled;
  };
  UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function (GetRsltInfo) {


    if (GetRsltInfo.response_code == 0) {
      $scope.viewcustomres = GetRsltInfo.result_object;

      $localStorage.viewcustomres = GetRsltInfo.result_object;

    }
    else {

    }

  }, function (error) { })

  $scope.changestatus = function () {
    debugger;
    if ($scope.status == "all") {
      $scope.viewcustomres = $localStorage.viewcustomres;
    }
    else if ($scope.status == "open") {
      $scope.viewcustomres = [];
      for (var i = 0; i < $localStorage.viewcustomres.length; i++) {

        if ($localStorage.viewcustomres[i].remarks.length != 0) {
          $scope.viewcustomres.push($localStorage.viewcustomres[i]);
        }

      }
    }
    else if ($scope.status == "close") {
      $scope.viewcustomres = [];
      for (var i = 0; i < $localStorage.viewcustomres.length; i++) {

        if ($localStorage.viewcustomres[i].remarks.length == 0) {
          $scope.viewcustomres.push($localStorage.viewcustomres[i]);
        }
      }
    }

  };

  $scope.showRemarks = function (deletecustomer) {
    debugger;
    $scope.remarkslist = deletecustomer;
    $('#viewCustomer').modal('show');
  }

  $scope.showRemarks = function (editremark) {
    debugger;
    $localStorage.customermobile = editremark.mobile;
    $scope.remarkslist = editremark;
    $rootScope.custmobile = editremark.mobile;

    for (var i = 0; i < editremark.remarks.length; i++) {
      if (editremark.remarks[i].status == "N") {
        editremark.remarks[i].checkstatus = true;
      }
      else {
        editremark.remarks[i].checkstatus = false;
      }
    }



    $('#viewCustomer').modal('show');
  }

  $scope.showeditRemark = function (deletecustomer) {
    debugger;
    $rootScope.viewofeditremark = deletecustomer;
    $('#viewCustomer').modal('hide');
    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $state.go('menuList.editcustomerremarks');
  }
  $scope.delete = function (deletecustomer) {

    $rootScope.customer = deletecustomer;

  }
  $scope.deleteRow = function (deletecustomer) {
    debugger;
    $scope.showloader = true;
    UpdatesviewcustomerServiceInfo.deleterow($rootScope.customer._id).then(function (GetRsltInfo) {
      debugger;
      if (GetRsltInfo.response_code == 0) {
        toastr.success('Successfully Deleted');
        UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function (GetRsltInfo) {

          $scope.showloader = false;
          if (GetRsltInfo.response_code == 0) {
            $scope.viewcustomres = GetRsltInfo.result_object;

          }
          else {

          }

        }, function (error) { })
      }
      else {
        $scope.showloader = false;
        toastr.error('Phone number already exits');
      }

    }, function (error) { });

  };
  //edit customer 
  $scope.showeditcustomer = function (editcust) {
    debugger;
    $rootScope.vieweditcustomer = editcust;

    console.log($rootScope.vieweditcustomer);
    debugger;
    $state.go('menuList.editcustomerdetails');
  };


  $scope.remarkdes = function (remdes) {
    debugger;
    $rootScope.vieweditcustomerremarks = remdes;
    console.log($rootScope.vieweditcustomerremarks);
    debugger;
    $state.go('menuList.editcustomerremarks');
  };


  $scope.ShowDelRemarkConfirmamtaion = function (delcustomerremark, remark) {


    $scope.delRemark = remark;
    $scope.delcustomerremark = delcustomerremark;
    $("#deleteCustomerRemark").modal("show");
    $("#deleteCustomerRemark").css("z-index", "1500");

  };

  //Author Jitender M R
  //Date :17-05-2018
  //delete customer remark
  $scope.deleteRemark = function () {
    debugger;
    UpdatesviewcustomerServiceInfo.deleteRemark($scope.delRemark._id).then(function (GetRsltInfo) {


      if (GetRsltInfo.response_code == 0) {
        toastr.success('Successfully Deleted');
        UpdateviewcustomerServiceInfo.viewcustomer_Service().then(function (GetRsltInfo) {

          $scope.showloader = false;
          if (GetRsltInfo.response_code == 0) {
            $scope.viewcustomres = GetRsltInfo.result_object;
            for (i = 0; i < $scope.viewcustomres.length; i++) {

              if ($scope.viewcustomres[i]._id === $scope.delcustomerremark._id) {
                $scope.remarkslist = $scope.viewcustomres[i];
                for (var j = 0; j < $scope.remarkslist.remarks.length; j++) {
                  if ($scope.remarkslist.remarks[j].status == "N") {
                    $scope.remarkslist.remarks[j].checkstatus = true;
                  }
                  else {
                    $scope.remarkslist.remarks[j].checkstatus = false;
                  }
                }
              }

            }

          }
          else {

          }

        }, function (error) { })
      }
      else {
        $scope.showloader = false;
        toastr.error('Phone number already exits');
      }

    }, function (error) { });

  };


});




