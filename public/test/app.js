/**
 * Created by Andres on 5/20/2017.
 */
angular
    .module("myApp", [])
    .controller("myController", ["$http",'mainInfo', myController])
    .factory('mainInfo', function($http) {
        return $http.get('data.json');
        /*var obj = {content:null};

        obj.getAll = function () {
          return $http.get('data.json').success(function(data) {
         // you can do some processing here
         obj.content = data;
         }); ;
        }

        return obj;*/
    });

function myController($http, mainInfo) {
    var vm = this;
    vm.name = "andres";

    vm.foo = mainInfo.success(function (data) {
        vm.foo = data.contentItem[0];
    });


}
