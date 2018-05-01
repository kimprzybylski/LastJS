app.filter('imageFilter', function() {
    return function(input) {
        var tekst = JSON.stringify(input);
        return tekst.substring(10, tekst.indexOf(",")-1);
    }
});