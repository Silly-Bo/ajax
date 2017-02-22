var $ = {
    ajax: function (options) {
        var type = options.type;
        var url = options.url;
        var data = options.data;
        var success = options.success;
        // 实例化对象
        var xhr = new XMLHttpRequest();
        // 请求行
        if (type == 'get') {
            url = url + '?' + data;
            data = null;
        }
        xhr.open(type, url);
        // 请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //  请求正文
        xhr.send(data);
        // 监听并处理响应
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;
                success(result);
            }
        }
    }
}