function StarWarsService() {
    this.$inject = ['$http'];
    var urlBase = "http://swapi.co/api/vehicles/";
    var dataFactory = {};
    
    dataFactory.getVehicles = function (){
        return $http.get(urlBase);
    }
}