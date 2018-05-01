'use strict'

app.controller('ArtistController',
    function ArtistController($scope, musicData, $routeParams) {
        musicData.getArtist($routeParams.name)
            .success(function(data) { 
                console.log(data.artist);
                $scope.artist = data.artist; })
            .error(function(data, status, headers, config) {
                console.warn(data, status, headers(), config);
            });
    });