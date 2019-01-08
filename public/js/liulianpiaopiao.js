// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-150.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-151.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-152.jpg");
});

// ==============================第二部分=========================
//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-105.jpg");
    $(".time span").text("最早明天 09:30配送");
});
$(".bt2").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-106.jpg");
    $(".time span").text("最早明天 09:30配送");
});
$(".bt3").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-107.jpg");
    $(".time span").text("最早明天 09:30配送");
});
$(".bt4").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-108.jpg");
    $(".time span").text("最早明天 09:30配送");
});
// $(function () {
//     $(".mid button:nth-of-type(2)").css({
//         outline:"1px solid #684029",
//     }).children().css("display","block");
//     $(".mid button:nth-of-type(3)").css({
//         outline:"1px solid #e7e0dd",
//     }).children().css("display","none");
// })

$(".mid button").click(function () {
    //把价格导入顶部导航栏
    var h=$(".price span:nth-of-type(1)").text();
    var k=$(".price span:nth-of-type(2)").text();
// if()
    $(".daohangRight span").text(h+k);
})

