function drag(option) {
    var _obj = option.src;
    var handle = option.callback;
    var minX = option.minX;
    var minY = option.minY;
    var offsetX = option.offsetX;
    var offsetY = option.offsetY;
    var pageOffsetX = option.pageOffsetX;
    var pageOffsetY = option.pageOffsetY;
    $('*').off('mousemove').on('mousemove', function (event) {
        event.preventDefault();
        var x = event.pageX - offsetX - pageOffsetX;
        var y = event.pageY - offsetY - pageOffsetY;
        x = x <= minX ? minX : x;
        y = y <= minY ? minY : y;
        _obj.css({left: x, top: y});
    });
    $('*').off('mouseup').on('mouseup', function () {
        $('*').off('mousemove');
        handle();
    });
    $('body').off('mouseleave').on('mouseleave', function () {
        $('*').off('mousemove');
        handle();
    });
}