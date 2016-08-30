;
$(function () {


    /*注册按钮点击事件*/
    $(".zWCZC").on("click", function () {
        var userName = $("#z-userName").val();
        var userNumber = $("#z-userNumber").val();
        var userWord = $("#z-userWord").val();
        var shengshi = $("#shengshi").val();
        var myAddress = $("#myAddress").val();
        var reg = /^1[3|4|5|7|8]\d{9}$/;

        if (userName == "") {
            alert("请输入昵称");
        } else if (userNumber == "") {
            alert("手机号码不能为空");
        } else if (userWord == "") {
            alert("请输入手机验证码");
        } else if (shengshi == "") {
            alert("请选择地区");
        } else if (myAddress == "") {
            alert("请定位详细地址");
        } else if (userNumber.length < 11 || userNumber.length > 11) {
            alert("手机号码有11位");
        } else if (userNumber.length == 11 && !reg.test(userNumber)) {
            alert("手机号码格式错误");
        }
    });
    /*手机号文本框失去焦点事件*/
    $("#z-userNumber").on("blur", function () {
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        var userNumber = $("#z-userNumber").val();

        if (userNumber.length < 11 || userNumber.length > 11) {
            alert("手机号码有11位");
        } else if (userNumber.length == 11 && !reg.test(userNumber)) {
            alert("手机号码格式错误");
        }

    });
    /*上传头像*/
    $("#file_upload").change(function () {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview");

        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            dataURL = $file.val();
            var imgObj = document.getElementById("preview");
            // 两个坑:
            // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
            // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

        }
    });
    /*倒计时*/
    var wait = 60;

    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "免费获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value = "重新发送(" + wait + ")";
            wait--;
            setTimeout(function () {
                    time(o)
                },
                1000)
        }
    }
    document.getElementById("btn").onclick = function () {
        time(this);
    }

});
