'use strict'

app.controller('TrackController',
    function TrackController($scope, musicData, $routeParams) {
        musicData.getTrack($routeParams.artist, $routeParams.track)
            .success(function(data) {
                $scope.track = data.track; })
            .error(function(data, status, headers, config) {
                console.warn(data, status, headers(), config);
            });
    });