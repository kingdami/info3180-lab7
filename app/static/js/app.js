/* global angular */
var app = angular.module('displayApp', []);

app.factory('images', ['$http', function($http) {
    return $http({method: 'GET', url:"/api/thumbnails"}).then(function(response) {
        console.log("tst");
        return response;
        
    });
    
    
}]);

app.controller('displayController', ['$scope', 'images', function($scope, images){
    images.then(function(img) {
        $scope.pictures = img.data;
        console.log("Here");
        console.log($scope.pictures);
    });
}]);
