var DragHandle = {
    init: function (obj, onMove, onEnd) {
        var _obj = obj;
        var _onMove = onMove;
        obj.find('.widget-title').off('mousedown').on('mousedown', function (event) {
            event.preventDefault();
            var _self = $(this);
            _self.addClass('onDrag');
            var w = obj.position();
            var _lx = event.pageX - 60 - w.left;
            var _ly = event.pageY - w.top;
            var _base = $('*');
            _base.off('mousemove').on('mousemove', function (event) {
                event.preventDefault();
                var x = event.pageX - _lx - 60;
                var y = event.pageY - _ly;
                x = x <= 4 ? 4 : x;
                y = y <= 4 ? 4 : y;
                _obj.css({left: x, top: y});
                if (arguments.length > 1) {
                    _onMove();
                }
            });
            MouseControlHandle.complete({
                base: _base,
                callback: [function () {
                    _self.removeClass('onDrag')
                }, onEnd]
            })
        });
    }
};

var ResizeHandle = {
    on: function (obj, onMove, onEnd) {
        obj.append('<i class="resize"></i>');
        MouseControlHandle.trigger(obj.find('.resize'), obj, function (event) {
            var args = event.data;
            var w = args.obj;
            var x = event.pageX - w.position().left - 60;
            var y = event.pageY - w.position().top;
            x = x <= 400 ? 400 : x;
            y = y <= 200 ? 200 : y;
            w.css({'width': x, 'height': y});
            if (args.callback) {
                args.callback();
            }
        }, onMove, onEnd);
    }
};

var MouseControlHandle = {
    trigger: function (trigger, obj, moveHandle, moveCall, endCall) {
        trigger.off('mousedown').on('mousedown', {obj: obj}, function (event) {
            var _base = $('*');
            _base.off('mousemove').on('mousemove', {
                callback: moveCall,
                obj: event.data.obj
            }, moveHandle);
            MouseControlHandle.complete({
                base: _base,
                callbacks: endCall
            });
        });
    },
    complete: function (option) {
        option.base.off('mouseup').on('mouseup', option, endHandle);
        $('body').off('mouseleave').on('mouseup', option, endHandle);
        function endHandle(event) {
            var args = event.data;
            args.base.off('mousemove');
            if (typeof args.callback == 'object') {
                args.callback();
            }
        }
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