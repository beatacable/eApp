var app = angular.module('eAPP', []);

app.controller('submitcontroller', function ($scope, $http, $window) {

$scope.showaddnewsubmitpage = function () {

   $window.location.href = ('/view/submitForm.html');
}

});
