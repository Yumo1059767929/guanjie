window.onload = function () {

    /*定位*/
    var zDW = document.getElementById("zDW");
    var myAddress = document.getElementById("myAddress");
    zDW.onclick = function () {
        var jing;
        var wei;

        //获取经纬度
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("该浏览器不支持获取地理位置。");
        }

        function showPosition(position) {
            jing = position.coords.latitude;
            wei = position.coords.longitude;
        }

        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(jing, wei);
        map.centerAndZoom(point, 12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);
                var geoc = new BMap.Geocoder();
                var pt = r.point;
                geoc.getLocation(pt, function (rs) {
                    var addComp = rs.addressComponents;
                    myAddress.value = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                });
            } else {
                alert('failed' + this.getStatus());
            }
        }, {
            enableHighAccuracy: true
        })
    }


}
