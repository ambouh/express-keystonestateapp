/**
 * Created by Andres on 5/16/2017.
 */
(function(){
    "use strict";
    angular
        .module("common.services")
        .factory('mainInfo', ["$http", mainInfo])

    function mainInfo($http) {
        return $http.get('/javascripts/common/data.json');
    }
}());