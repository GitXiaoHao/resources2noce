$(function () {
    $.ajax({
            type: 'get',
            async: true,
            url: "../menu/menu.html",
            success: function (data) {
                $("body").append(data);
            }
        }
    );
    //鼠标移入 其他card标签透明度 0.5
    $(".card").hover(function () {
        $(this).siblings().stop().fadeTo(200,0.5);
    },function () {
        //鼠标移开 透明度改为1
        $(this).siblings().stop().fadeTo(200,1);
    }) ;
});
/*
coverColor：图片即将显示时覆盖层的颜色
coverDiv：图片即将显示时覆盖层可显示的土自定义组件
offsetBottom：图片距离屏幕底部出现时间点的距离差值（注解：延迟加载图片会在图片顶部接触屏幕底部时出现，如果想要让图片顶部距离屏幕底部有一定距离时出现，请设置此值）
offsetTopm：图片距离屏幕底部出现时间点的距离差值（注解：同上，距离顶部）
onLoadBackEnd：图片已经完全出现时的回调函数，参数为（index，event）加载的图片下标，以及dom对象（dom对象为jquerydom或zeptodom对象）
onLoadBackStart：图片已经下载完成，即将开始显示时的回调函数（参数同上）
 */
lazyLoadInit({
    offsetBottom: 0,
    offsetTopm: 0,
    showTime: 100,
    onLoadBackEnd: function (i, e) {
        console.log("onLoadBackEnd:" + i);
    }
    , onLoadBackStart: function (i, e) {
        console.log("onLoadBackStart:" + i);
    }
});