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
        //        alert(userNumber);
    });
});
