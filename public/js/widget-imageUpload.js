var ImageUpload = {
    init: function () {
        var inputs = $('input[type="file"][data-type="uploadFile"]');
        inputs.on('change', function (event) {
            event.preventDefault();
            var _self = $(this);
            var option = {
                sizeLimit: _self.attr('data-upload-limit'),
                thumb: _self.attr('data-thumb')
        }
            ;
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
                    reader.onloadend = (function (target) {
                        return function (e) {
                            $(option.thumb).append('<img src="' + e.target.result + '">');
                        }
                    })(_self);
                    reader.readAsDataURL(files[i]);
                }
            }
        })
    }
};