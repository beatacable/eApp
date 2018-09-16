var app = angular.module('eApp', []);
app.controller('myCtrl', function($scope) {
    $scope.emails = {
        email01 : {name : "Rackspace Email ", price : "$2 per mailbox per month"},
        email02 : {name : "Rackspace Email Plus ", price : "$3.50 per mailbox per month"},
        email03 : {name : "Microsoft Exchange", price : "$7.99 per mailbox per month"}
    }
});
