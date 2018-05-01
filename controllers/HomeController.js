'use strict'

app.controller('HomeController',
    function HomeController($scope, musicData) {
        musicData.getTopTracks()
            .success(function(data) {
                $scope.tracks = data.tracks.track; })
            .error(function(data, status, headers, config) {
                console.warn(data, status, headers(), config);
            });
    });