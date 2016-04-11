'use strict';

angular.module('spaNiegeApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']);

// // SERVICES
// app.service('MarsService', MarsService);
// app.service('StarWarsService', StarWarsService);

// // CONTROLLERS
// app.controller('CoreCtrl', CoreCtrl($scope, $injector));

angular.module('spaNiegeApp').controller('CoreCtrl', function($scope, $http) {
    
    $scope.getVehicles = function() {
        $http.get("http://swapi.co/api/vehicles/").
            success(function(data) {
                $scope.restObject = data;
                console.log($scope.restObject);
            });
    };

    $scope.getBacon = function() {
        $http.get("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1").
            success(function(data) {
                $scope.restObject = data;
                console.log($scope.restObject);
            });
    }

});

angular.module('spaNiegeApp').directive('jsonText', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel) {            
          function into(input) {
            return JSON.parse(input);
          }
          function out(data) {
            return JSON.stringify(data);
          }
          ngModel.$parsers.push(into);
          ngModel.$formatters.push(out);

        }
    };
});