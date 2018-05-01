app.filter('timeFilter', function() {
    return function(input) {
        var min = Math.round(input / 60);
        var sec = input % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        return min + ":" + sec;
    }
});