var main = {
<<<<<<< HEAD
    init: function () {
=======
    init : function () {
>>>>>>> 89c0ce7 (Initial commit)
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });

        $('#btn-update').on('click', function () {
            _this.update();
        });

        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },
<<<<<<< HEAD
    save: function () {
=======
    save : function () {
>>>>>>> 89c0ce7 (Initial commit)
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
<<<<<<< HEAD
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
=======
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
>>>>>>> 89c0ce7 (Initial commit)
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
<<<<<<< HEAD
    update: function () {
=======
    update : function () {
>>>>>>> 89c0ce7 (Initial commit)
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
<<<<<<< HEAD
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
=======
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
>>>>>>> 89c0ce7 (Initial commit)
            alert('글이 수정되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
<<<<<<< HEAD
    delete: function () {
=======
    delete : function () {
>>>>>>> 89c0ce7 (Initial commit)
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
<<<<<<< HEAD
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
=======
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8'
        }).done(function() {
>>>>>>> 89c0ce7 (Initial commit)
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
<<<<<<< HEAD
=======

>>>>>>> 89c0ce7 (Initial commit)
};

main.init();