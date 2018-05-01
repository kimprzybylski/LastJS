 var app = angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/top-tracks', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/track/:artist/:track', {
                templateUrl: 'views/track.html',
                controller: 'TrackController'
            })
            .when('/artist/:name', {
                templateUrl: 'views/artist.html',
                controller: 'ArtistController'
            })
            .when('/album/:artist/:album', {
                templateUrl: 'views/album.html',
                controller: 'AlbumController'
            })
            .otherwise({
                redirectTo: "/top-tracks"
            })
    }