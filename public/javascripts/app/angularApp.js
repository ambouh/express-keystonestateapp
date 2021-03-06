/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    var app = angular
        .module('KeystoneStateApp',
        [
            "common.services",
            "ui.router",
            "dataResourceMock"
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
                    .state('camps', {
                        url: '/camps',
                        templateUrl: "/views/camps.html",
                        resolve: {
                            dataResource: "dataResource",
                            allCamps: function (dataResource) {
                                return dataResource.query().$promise;
                            }

                        },
                        controller: 'CampsController as vm'
                    })
                    .state('camp', {
                        abstract: true,
                        url: "/camp/:campId",
                        templateUrl: "/views/camp.html",
                        controller: 'CampController as vm',
                        resolve: {
                            dataResource: 'dataResource',
                            camp: function (dataResource, $stateParams) {
                                var campId = $stateParams.campId;
                                return dataResource.get({campId: campId}).$promise;
                            }

                        }
                    })
                    .state('camp.addPerson', {
                        url: '/addPerson',
                        templateUrl: "/views/camp.addPerson.html"
                    })
                    .state('camp.listOfPersons', {
                        url: '/listOfPersons',
                        templateUrl: "/views/camp.listOfPersons.html"
                    })
                    .state('about', {
                        url: '/about',
                        templateUrl: "/views/about.html",
                        controller: 'AboutController as vm'
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: "/views/contact.html",
                        controller: 'ContactController as vm'
                    })
                    .state('signup', {
                        url: '/signup',
                        templateUrl: "/views/sign-up.html",
                        controller: 'SignupController as vm'
                    })
            }
        ])
        .directive('pageView', function () {
            return{
                restrict: "AEC",
                templateUrl:"/views/page-view.html"
            }
        })
        .directive('costPerPlayer', function () {
            return{
                restrict: "AEC",
                templateUrl:"/views/cost-per-player.html"
            }
        })
        .factory('serveData', function(){

        });


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