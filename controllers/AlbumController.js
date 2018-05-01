'use strict'

app.controller('AlbumController',
    function AlbumController($scope, musicData, $routeParams) {
        musicData.getAlbum($routeParams.artist, $routeParams.album)
        .success(function(data) { 
            console.log(data.album);
            $scope.album = data.album; })
        .error(function(data, status, headers, config) {
            console.warn(data, status, headers(), config);
        });
    });