$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-20.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-21.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy-22.jpg");
});

//设置不同磅数显示不同内容
$(".bt1").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-23.jpg");
    $(".size span").text("13.5x13.5");
    $(".time span").text("最早今天 18:30配送");
});
$(".bt2").click(function () {
    $(".size span").text("15.5x15.5");
    $(".sec2-tl img").attr("src","../images/lmy-24.jpg");
    $(".time span").text("最早今天 18:30配送");
});
$(".bt3").click(function () {
    $(".size span").text("17.5x17.5");
    $(".time span").text("最早今天 18:30配送");
    $(".sec2-tl img").attr("src","../images/lmy-25.jpg");
});
$(".bt4").click(function () {
    $(".size span").text("12.5x15.5");
    $(".time span").text("最早今天 18:30配送");
    $(".sec2-tl img").attr("src","../images/lmy-26.jpg");
});
$(".bt5").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-27.jpg");
});
$(".bt6").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy-28.jpg");
});