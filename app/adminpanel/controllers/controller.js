kService.controller('AdminController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('/kservice_test').success(function (response) {
        console.log("I got the data i requested");
        console.log(response);
        $scope.newsfeed = response;
    });
    $scope.addData = function(){
      console.log("Hello");
    };
}]);
