/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    var app = angular
        .module('KeystoneStateApp',
        [
            "common.services",
            "ui.router"
        ])
        .config([
            "$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('home',{
                        url: '/',
                        templateUrl: '/views/home.html',
                        controller: 'HomeController as vm'
                    })
            }
        ]);

        app.run(allOtherScripts);

    //functions
    function allOtherScripts() {
        dropdownFadeInOut();
    }
    function dropdownFadeInOut() {
        $(".pull-right").hover(
            function(){
                $(".dropdown-menu",this).fadeIn()
            },
            function(){
                $(".dropdown-menu",this).fadeOut("fast")
            }
        );
    }
}());