var WidgetModule = {
    list: [],
    init: function () {
        var shortcut = $('a[data-type="shortcut"]');
        if (shortcut.length > 0) {
            shortcut.off('click').on('click', function (event) {
                event.preventDefault();
                var _self = $(this);
                var wName = _self.attr('data-widget-name');
                var wId = _self.attr('data-widget-id');
                var wHref = _self.attr('data-widget-href');
                if (WidgetModule.list.indexOf(wId) < 0) {
                    WidgetModule.createBox(wName, wId, wHref, function (widget) {
                        var _id = widget.attr('id');
                        WidgetModule.list.push(_id);
                        WidgetModule.load(widget);
                        widget.find('.widget-close').off('click').on('click', function (event) {
                            event.preventDefault();
                            WidgetModule.closeWidget(_id);
                        });
                        widget.find('.widget-reload').off('click').on('click', function (event) {
                            event.preventDefault();
                            WidgetModule.load(widget);
                        });
                        widget.off('mousedown').on('mousedown', function () {
                            $(this).siblings('.active').removeClass('active');
                            $(this).addClass('active');
                        });
                        ResizeHandle.init(widget);
                        DragHandle.init(widget);
                    });
                }
            })
        }
    },
    load: function (_widget) {
        var href = _widget.attr('data-widget-type');
        var option = {
            url: '/widgets/' + href,
            success: function (html) {
                if (html) {
                    _widget.find('.widget-content').empty().append(html);
                }
            }
        };
        AjaxHandle.handle(option);
    },
    createBox: function (name, id, href, cb) {
        var templete = '' +
            '<div id="' + id + '" class="widget widget-default fade" data-type="widget" data-widget-type="' + href + '">' +
            '<div class="widget-box">' +
            '<div class="widget-title">' +
            '<b>' + name + '</b>' +
            '<div class="widget-control-pad">' +
            '<div title="Reload" class="widget-control-btn widget-reload">' +
            '<i class="icon i-lighting"></i>' +
            '</div>' +
            '<div title="Close" class="widget-control-btn widget-close">' +
            '<i class="icon i-wrong"></i>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="widget-content">' +
            'Loading...' +
            '</div>' +
            '</div>' +
            '</div>';
        $('#page').append(templete);
        if (cb) {
            cb($('#' + id));
        }
    },
    closeWidget: function (id) {
        $('#' + id).remove();
        WidgetModule.list.splice(WidgetModule.list.indexOf(id), 1);
        console.log(WidgetModule.list);
    }
};