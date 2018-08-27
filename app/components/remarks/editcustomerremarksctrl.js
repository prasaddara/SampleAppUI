app.controller("editremarksCtrl", function ($scope, $state, $rootScope, $window, $filter, Updateremarksserviceinfo, Updateeditcustomerremarksserviceinfo, toastr) {
    debugger;

    $scope.editRemarks = {
        mobile: '',
        itemdesc: '',
        remarks: '',
        assigndate: '',
        status: 'n'

    }


    $scope.showeditremark = $rootScope.viewofeditremark;


    //$scope.dob = new Date('yyyy-mm-dd',$scope.showeditremark.assigndate);

    $scope.showeditremark.mobile = $rootScope.custmobile;
    $scope.editremarksCall = function (updateRemarks) {
        debugger;

        $scope.showloader = true;
        $scope.editRemarks.mobile = updateRemarks.mobile;
        $scope.editRemarks.itemdesc = updateRemarks.itemdesc;
        $scope.editRemarks.remarks = updateRemarks.remark;
        $scope.editRemarks.remarkId = updateRemarks._id;
        $scope.editRemarks.assigndate = $filter('date')(updateRemarks.assigndate, "dd-MM-yyyy");


        Updateeditcustomerremarksserviceinfo.editremarks_Service($scope.editRemarks).then(function (GetRsltInfo) {
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




