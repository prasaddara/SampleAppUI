
app.controller("addcustomerCtrl", function ($scope, $localStorage, $window, UpdateaddcustomerServiceinfo, toastr) {

    $scope.remarks = {
        itemdesc: '',
        remark: ''
    };

    $scope.addcustomer = {

        mobile: '',
        name: '',
        email: '',
        address: '',
        remarks: [], //store multiple remarks
        assigndate: ''

    };
    //temp storage


    $scope.viewcustomres = $localStorage.viewcustomres;

    //   $scope.onSelect = function($item,$model,$label) {
    //      $scope.query += ": ";
    //}

    $scope.customerdetails = function (addcustomer) {
        debugger;
        for (var i = 0; i < $localStorage.viewcustomres.length; i++) {
            if (addcustomer.mobile == $localStorage.viewcustomres[i].mobile) {
                $scope.addcustomer.name = $localStorage.viewcustomres[i].name;
                $scope.addcustomer.email = $localStorage.viewcustomres[i].email;
                $scope.addcustomer.address = $localStorage.viewcustomres[i].address;
            }
        }

    }
    $scope.addcustomerCall = function (addcustomer) {
        //push into remark list

        $scope.addcustomer.remarks.push($scope.remarks);

        $scope.showloader = true;
        UpdateaddcustomerServiceinfo.addcustomer_Service(addcustomer).then(function (GetRsltInfo) {

            $scope.showloader = false;

            if (GetRsltInfo.response_code == 0) {
                toastr.success('Successfully added details');
                $localStorage.viewcustomres.push(GetRsltInfo.result_object);
                $window.location.reload();

            }
            else {
                $scope.showloader = false;
                toastr.error('Phone number already exits');
            }
        }, function (error) { })


    };
});
