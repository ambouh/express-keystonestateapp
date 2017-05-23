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
                        controller: 'NavController as vm'
                    })
            }
        ])
        .controller('NavController',
        [
            "mainInfo",
            NavController
        ]
    )

    function NavController(mainInfo) {
        var vm = this;
       mainInfo.then(function(response) {
           vm.header = response.data.template.header;
           vm.footer = response.data.template.footer;
       });
    }
}());
