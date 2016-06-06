var DragHandle = {
    init: function (obj, onMove, onEnd) {
        var _obj = obj;
        obj.find('.widget-title').off('mousedown').on('mousedown', function (event) {
            event.preventDefault();
            var _self = $(this);
            _self.addClass('onDrag');
            var w = obj.position();
            var _lx = event.pageX - 60 - w.left;
            var _ly = event.pageY - w.top;
            $('*').off('mousemove').on('mousemove', function (event) {
                event.preventDefault();
                var x = event.pageX - _lx - 60;
                var y = event.pageY - _ly;
                x = x <= 4 ? 4 : x;
                y = y <= 4 ? 4 : y;
                _obj.css({left: x, top: y});
                if (arguments.length > 1) {
                    onMove();
                }
            });
            $('*').off('mouseup').on('mouseup', function () {
                $('*').off('mousemove');
                _self.removeClass('onDrag');
                if (arguments.length > 2) {
                    onEnd();
                }
            });
            $('body').off('mouseleave').on('mouseleave', function () {
                $('*').off('mousemove');
                _self.removeClass('onDrag');
                if (arguments.length > 2) {
                    onEnd();
                }
            });
        });
    }
};

var ResizeHandle = {
    init: function (obj, onMove, onEnd) {
        var _obj = obj;
        obj.append('<i class="resize"></i>');
        obj.find('.resize').off('mousedown').on('mousedown', function (event) {
            event.preventDefault();
            var w = obj.position();
            var _lx = w.left;
            var _ly = w.top;
            $('*').off('mousemove').on('mousemove', function (event) {
                event.preventDefault();
                var x = event.pageX - _lx - 60;
                var y = event.pageY - _ly;
                x = x <= 400 ? 400 : x;
                y = y <= 200 ? 200 : y;
                _obj.css({'width': x, 'height': y});
                if (arguments.length > 1) {
                    onMove();
                }
            });
            $('*').off('mouseup').on('mouseup', function () {
                $('*').off('mousemove');
                if (arguments.length > 2) {
                    onEnd();
                }
            });
            $('body').off('mouseleave').on('mouseleave', function () {
                $('*').off('mousemove');
                if (arguments.length > 2) {
                    onEnd();
                }
            });
        })
    }
};

var AjaxHandle = {
    handle: function (option) {
        $.ajax(option);
    }
};

var ImageUpload = {
    init: function () {
        var inputs = $('input[type="file"][data-type="uploadFile"]');
        inputs.off('change').on('change', function (event) {
            event.preventDefault();
            var _self = $(this);
            var option = {
                sizeLimit: _self.attr('data-upload-limit') * 1024,
                thumb: _self.attr('data-thumb')
            };
            var files = this.files;
            var imageReg = /image\/\w+/i;
            if (files.length > 0) {
                for (var i = 0; i < files.length; i++) {
                    if (!imageReg.test(files[i].type)) {
                        alert('Wrong type of file!');
                        return false;
                    }
                    if (files[i].size > option.sizeLimit) {
                        alert('Over the limit!');
                        return false;
                    }
                    var reader = new FileReader();
                    reader.onloadend = (function (options) {
                        return function (e) {
                            $(options.thumb).append('<img src="' + e.target.result + '">');
                        }
                    })(option);
                    reader.readAsDataURL(files[i]);
                }
            }
        });
    },
    canvasControl: function () {

    }
};