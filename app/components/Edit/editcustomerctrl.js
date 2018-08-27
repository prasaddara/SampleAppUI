app.controller("editcustomerCtrl", function ($scope, $state, $rootScope, $window, UpdateeditcustomerServiceinfo, toastr) {
    if ($rootScope.vieweditcustomer) {
        debugger;
        $scope.editcustomer = $rootScope.vieweditcustomer;
        d = new Date($scope.editcustomer.assigndate);
        $('#date').val(d.toISOString().split('T')[0]);
    }

    $scope.eidtcustomer = {

        mobile: '',
        name: '',
        email: '',
        address: '',
        //            remarks:[], //store multiple remarks
        assigndate: ''

    };
   
    $scope.editcustomerCall = function (updateCustomer) {
       
        $scope.showloader = true;
        UpdateeditcustomerServiceinfo.editcustomer_Service(updateCustomer).then(function (GetRsltInfo) {
            debugger;
            $scope.showloader = false;

            if (GetRsltInfo.response_code == 0) {
                toastr.success('Update successfully');
                $state.go('menuList.viewcustomer');
            }
            else {
                $scope.showloader = false;
                toastr.error('Update failure');
            }
        }, function (error) { })


    };
});


