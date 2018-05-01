app.directive('imageDirective', function () {
    return function (scopte, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.imageDirective + ')',
            'background-repeat': 'no-repeat',
            'height': '300px'
        })
    }
});