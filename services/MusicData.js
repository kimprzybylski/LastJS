app.factory('musicData', function($http) {
    return {
        getArtist: function(name) {
            return $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + name + '&api_key=0e621ec0b955900134a3f957fd85c139&format=json'});
        },
        
        getAlbum: function(artist, album) {
            return $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=0e621ec0b955900134a3f957fd85c139&artist=' + artist + '&album=' + album + '&format=json'});
        },

        getTopTracks: function() {
            return $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0e621ec0b955900134a3f957fd85c139&format=json'});
        },

        getTrack: function(artist, track) {
            return $http({method: 'GET', url: 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0e621ec0b955900134a3f957fd85c139&artist=' + artist + '&track=' + track + '&format=json'});
        }
    };
});


