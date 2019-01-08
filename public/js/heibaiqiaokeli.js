// ==============================第一部分===========================
//设置图片对应关系
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-170.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-171.jpg");
});
// ==============================第二部分=========================
//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".time span").text("最早今天 14:30配送");
});
$(".bt2").click(function () {
    $(".time span").text("最早今天 14:30配送");
});
$(".bt3").click(function () {
    $(".time span").text("最早今天 14:30配送");
});
$(".bt4").click(function () {
    $(".time span").text("最早今天 14:30配送");
});
$(".bt5").click(function () {
    $(".time span").text("最早今天 14:30配送");
});

