/**
 * Created by Andres on 5/15/2017.
 */
(function(){
    var app = angular.module('dataResourceMock',
        [
            "ngMockE2E"
        ]);

    app.run(function($httpBackend, mainInfo){
        var data = $http.get('/javascripts/common/data.json');
    })
}());
