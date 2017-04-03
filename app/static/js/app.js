// Your JavaScript Code here
/* global angular */
var app = angular.module('displayApp', []);
app.controller('displayController', function($scope, $http) {
    $http.get("/api/thumbnails").then(function (response) {
        console.log(response.data.thumbnail);
        $scope.pictures = response.data.thumbnail;
    });
});