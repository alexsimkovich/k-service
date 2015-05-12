kService.controller('SearchVkInfoController',['$scope','$http', '$routeParams', function($scope, $http, $routeParams){

    var str = "смартфон, мобильный телефон, телефон";
    var url = 'https://api.vk.com/method/newsfeed.search?q='+ str +'&extended=1&count=30&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function (response) {
        console.log(url);
        console.log(response);
    });

}]);
