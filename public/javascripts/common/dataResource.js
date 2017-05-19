/**
 * Created by Andres on 5/16/2017.
 */
(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("dataResource", [ "$http", dataResource]);

    function dataResource($http) {
        var o = {
            dataContent: null
        };

        o.getAll = function () {
            return $http.get('/javascripts/common/data.json').success(function (response) {
                o.dataContent = response;
            })
            /*o.dataContent = {
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
                       };
           /*return o.dataContent;*/
        }

        return o;
    }
}());