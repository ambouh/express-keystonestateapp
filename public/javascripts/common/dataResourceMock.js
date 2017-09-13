/**
 * Created by Andres on 5/15/2017.
 */
(function(){
    var app = angular.module('dataResourceMock',
        [
            "ngMockE2E"
        ]);

    app.run(function($http, $httpBackend){
        //var data = $http.get('/javascripts/common/data.json');
        var datas =  [
            {
                "id" : "1",
                "venue" : "Susquehanna University",
                "location" : "514 University Ave, Selinsgrove, PA 17870",
                "date" : "June 01-08",
                "grades" : "Grade 9-12",
                "price" : "$200",
                "persons" : ["Joe Smith", "John Doe", "Thomas Townsend", "Jack Sparrow"]
            },
            {
                "id" : "2",
                "venue" : "University Of Maryland",
                "location" : "7950 Baltimore Ave, College Park, MD 20742",
                "date" : "June 01-08",
                "grades" : "Grade 9-12",
                "price" : "$200",
                "persons" : ["Marcus Cruz", "Mark Zackman", "Jonathon Sheppard", "Justin Henderson"]
            },
            {
                "id" : "3",
                "venue" : "Pennsylvania State University",
                "location" : "1 Old Main, State College, PA 16801",
                "date" : "June 01-08",
                "grades" : "Grade 9-12",
                "price" : "$200",
                "persons" : ["Roger Stanley", "Johnathan Pittman", "Korbin Rios", "Jerome Cobb"]

            }
        ];

        var dataUrl = "/api/data";
        $httpBackend.whenGET(dataUrl).respond(datas);

        var editingRegex = new RegExp(dataUrl +"/[0-9][0-9]*", '' );
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var campData;
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length -1];

            if (id > 0 ) {
                for (var i = 0; i < datas.length; i++) {
                    if (datas[i].id == id) {
                        campData = datas[i];
                        break;
                    }
                };
            }
            return [200, campData, {}];
        });

         $httpBackend.whenPOST(dataUrl).respond(function (method, url, data) {
            var campData = angular.fromJson(data);

             for (var i = 0; i < datas.length; i++) {
                 if (datas[i].id == campData.id) {
                     datas[i] = campData;
                     break;
                 }
             }
             return [200, campData, {}]
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/views/).passThrough();
        $httpBackend.whenGET(/javascripts/).passThrough();
    })
}());
