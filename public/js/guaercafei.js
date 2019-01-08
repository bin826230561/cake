$(function () {
    $(".img2,.img3,.img4").css("outline","none");
})
// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-300.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-301.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-302.jpg");
});
$(".img4").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-333.jpg");
});
$(".bt10").addClass("addClass");