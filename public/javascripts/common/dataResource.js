/**
 * Created by Andres on 7/25/2017.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("dataResource",
            ["$resource",
                dataResource]);

    function dataResource($resource) {
        return $resource("/api/data/:campId");
    }

}());