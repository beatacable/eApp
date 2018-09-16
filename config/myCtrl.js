// tried to use angular binding here through the $scope object
// example https://docs.angularjs.org/guide/scope

var eApp = angular.module('eApp',[]);

eApp.controller( myCtrl, function($scope) {
  $scope.selectedEmail = 'product_desc';

$scope.products = {
  option1 : = 'selectedEmail.price',
  option2 : = 'selectedEmail.name'
};
});
