function MarsService() {
    this.$inject = ['$http'];
    var urlBase = "http://marsweather.ingenology.com/v1/latest/";
    var dataFactory = {};
    
    dataFactory.getLastestMarsInfo = function (){
        return $http.get(urlBase);
    }
}