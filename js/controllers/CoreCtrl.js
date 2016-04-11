function CoreCtrl($scope, $injector) {
    $scope.serviceSW = $injector.get('StarWarsService');
    $scope.serviceMars = $injector.get('MarsService');
} 

CoreCtrl.prototype = Object.getPrototypeOf(CoreCtrl.prototype);
CoreCtrl.prototype.constructor = CoreCtrl;

CoreCtrl.prototype.getVehicles = function() {
    $scope.restObject = $scope.serviceSW.getVehicles();
    console.log(list);
};

CoreCtrl.prototype.getLatestMarsInfo = function() {
    var marsReport = $scope.serviceMars.getLastestMarsInfo();
    console.log(marsReport);
};