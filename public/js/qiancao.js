// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-101.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-102.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-103.jpg");
});
$(".img4").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-104.jpg");
});



// ==============================第二部分=========================
//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-105.jpg");
});
$(".bt2").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-106.jpg");
    $(".price span:nth-of-type(1)").text("¥298.00");
    $(".price span:nth-of-type(2)").text("/2.0磅");
});
$(".bt3").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-107.jpg");
    $(".price span:nth-of-type(1)").text("¥458.00");
    $(".price span:nth-of-type(2)").text("/3.0磅");
});
$(".bt4").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-108.jpg");
    $(".price span:nth-of-type(1)").text("¥750.00");
    $(".price span:nth-of-type(2)").text("/5.0磅");
});
$(function () {
    $(".mid button:nth-of-type(2)").addClass("addClass").children().css("display","block");
    $(".mid button:nth-of-type(3)").addClass("addClass2").children().css("display","none");
});

$(".mid button").click(function () {
    //把价格导入顶部导航栏
    var h=$(".price span:nth-of-type(1)").text();
    var k=$(".price span:nth-of-type(2)").text();
// if()
    $(".daohangRight span").text(h+k);
});
