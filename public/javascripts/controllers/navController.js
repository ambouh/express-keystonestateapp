/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    angular
        .module('KeystoneStateApp')
        .config([
            "$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('home',{
                        url: '/',
                        templateUrl: '/views/home.html',
                        controller: 'NavController',
                        resolve:{
                            mainInfo: ['mainInfo', function(mainInfo){
                                return mainInfo.getAll();
                            }]
                        }
                    })
            }
        ])
        .factory('mainInfo', ["$http", mainInfo]).controller('NavController',
        [
            "mainInfo",
            NavController
        ]
    )

    function NavController(mainInfo) {
        var vm = this;

       /* vm.header = {
         logo:[
         {
         classNames: "hidden-xs hidden-sm visible-md visible-lg",
         pictureUrl: "images/logo.png",
         },
         {
         classNames: "hidden-lg hidden-xs hidden-md visible-sm",
         pictureUrl: "images/logo-md.png",
         },
         {
         classNames: "hidden-lg hidden-md visible-xs",
         pictureUrl: "images/logo-sm.png",
         },
         ],

         links:[
         {
         href: "#",
         link: "Home"
         },
         {
         href: "#",
         link: "About"
         },
         {
         href: "#",
         link: "Camps"
         }
         ]
         };*/

       vm.header = mainInfo.dataContent;

        console.log(vm.header);
    }

    function mainInfo($http) {
        var o = {
            dataContent: []
        }

        o.getAll = function () {
            return $http.get('/javascripts/common/data.json').success(function(data){
                angular.copy(data, o.dataContent);
            });
        }

        return o;
    }
}());
