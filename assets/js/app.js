var app = angular.module("mykattakart", ['ui.router','toastr','ui.bootstrap','ngStorage']);


/*var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8888'}));*/



app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/shared/login/login.html',
            controller:'Loginctrl'
        })
        .state('menuList',{
            url:'/Dashboard',
            templateUrl:'app/components/Dashboard/dashboard.html'
        })
        .state('menuList.home',{
            url:'/home',
            templateUrl:'app/components/home/home.html',
            controller:'homectrl'
            
        })
        .state('menuList.addcustomer',{
            url:'/AddCustomer',
            templateUrl:'app/components/add_customer/addcustomer.html',
            controller:'addcustomerCtrl'
        })
        .state('menuList.viewcustomer',{
            url:'/viewcustomer',
            templateUrl:'app/components/view_customer/viewcustomer.html',
            controller:'viewCustomerctrl'
        })
        .state('menuList.addremarks',{
            url:'/remarks',
            templateUrl:'app/components/remarks/remarks.html',
            controller:'remarksCtrl'
        })
        .state('menuList.edit',{
            url:'/edit',
            templateUrl:'app/components/edit/edit.html',
            controller:''
        })
        .state('menuList.admin',{
            url:'/admin',
            templateUrl:'app/components/admin/admin.html',
            controller:'adminCtrl'
        })
         .state('menuList.editcustomerdetails', {
            url: '/editcustomerdetails',
            templateUrl: 'app/components/edit/editcustomerdetails.html',
            controller:'editcustomerCtrl'
        })
         .state('menuList.editcustomerremarks', {
            url: '/editcustomerremarks',
            templateUrl: 'app/components/remarks/editcustomerremarks.html'
            
        })
        
});


   
app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                // this next if is necessary for when using ng-required on your input.
                // In such cases, when a letter is typed first, this parser will be called
                // again, and the 2nd time, the value will be undefined
                if (inputValue == undefined) return ''
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});
app.directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
    return {
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            if (ctrl && ctrl.$validators.email) {
                ctrl.$validators.email = function(modelValue) {
                    return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                };
            }
        }
    };
});

