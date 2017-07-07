var app = angular.module('ngViewExampleApp', ['ngRoute']);

app.controller('RootCtrl', ['$scope', function($scope){
    $scope.title = "Home Page";
}]);

app.controller('CatsCtrl', ['$scope', function($scope){
    $scope.title = "Cats Page";
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'RootCtrl',
            template : '<h1>{{title}}</h1>'
        })
        .when('/cats', {
            controller : 'CatsCtrl',
            template : '<h1>{{title}}</h1>'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);
