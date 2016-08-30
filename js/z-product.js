;
$(function () {


    /*注册按钮点击事件*/
    $(".zWCZC").on("click", function () {

        var productNum = $("#z-productNum").val();
        var productType = $("#z-productType").val();
        var store = $("#z-store").val();
        var trueName = $("#z-trueName").val();
        var paperNum = $("#z-paperNum").val();

        if (productNum == "") {
            alert("请输入产品序列号");
        } else if (productType == "") {
            alert("请输入产品型号");
        } else if (store == "") {
            alert("请输入购买店铺");
        } else if (trueName == "") {
            alert("请输入您的真实姓名");
        } else if (paperNum == "") {
            alert("请输入订单号");
        }
    });

});
