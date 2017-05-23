/**
 * Created by Andres on 5/20/2017.
 */
angular
    .module("myApp", [])
    .controller("myController", ["$http",'mainInfo', myController])
    .factory('mainInfo', function($http) {
        var obj = {
            content:[]
        };


        return $http.get('data.json').success(function(data) {
         // you can do some processing here
         obj.content = data;
         }) ;

    });

function myController($http, mainInfo) {
    var vm = this;
    vm.name = "andres";

    mainInfo.success(function (data) {
        vm.foo = data.contentItem[0];
    });


}
