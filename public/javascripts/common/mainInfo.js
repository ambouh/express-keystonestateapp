/**
 * Created by Andres on 5/16/2017.
 */
(function(){
    "use strict";
    angular
        .module("common.services")
        .factory('mainInfo', ["$http", mainInfo])
        .service('getCamp', [$http, mainInfo], function ($http, mainInfo) {
            mainInfo.then(function (response) {
                var vm = this;

                vm.getCamp = function(id) {
                    vm.camps = response.data.camps;


                }
            });
        })

    function mainInfo($http) {
        return $http.get('/javascripts/common/data.json');
    }
}());