var app = angular.module('eApp', []);
app.controller('myCtrl', function($scope) {
    $scope.emails = {
        email01 : {name : "Rackspace Email ", price : "$2 per mailbox per month"},
        email02 : {name : "Rackspace Email Plus ", price : "$3.50 per mailbox per month"},
        email03 : {name : "Microsoft Exchange", price : "$7.99 per mailbox per month"}
    }
});

var app = angular.module('qty',[]);
app.controller('calcPriceController',function($scope){

  $scope.products = [];
  $scope.total = 0;

  $scope.sumPrice = function(products) {
    var total = 0;
    angular.forEach(products,function(value,index){
      total += parseFloat(value.price);
    });
    return total.toFixed(2);
  };

  $scope.removeItem = function(index){
    /*$scope.products.slice(index,1);*/
    $scope.products[index] = undefined;
    $scope.products = $scope.select2product($scope.products);
    $scope.total = $scope.sumPrice($scope.products);
  };

  $scope.select2product = function(products){
    var product = [];
    $scope.products = []; // clear data
    angular.forEach(products,function(value,index){
      if(value != undefined) product.push(value);
    });
    return product;
  };

  $scope.add = function(product){
    $scope.products.push(product);
    $scope.total = $scope.sumPrice($scope.products);
    $scope.clearInput();
  };

  $scope.clearInput = function(){
    $scope.product = null;
  };

});
