$(".line-item-1").click(function () {
  $(".dingdan").css({
      height:'180px'
  })
  $(".line-item-1").hide()
  $(".line-item-2").show()
  $(".shoukuan").hide()
  $(".price").hide()
})
$(".line-item-2").click(function () {
  $(".dingdan").css('height','22px');
  $("")
  $(".line-item-2").hide()
  $(".shoukuan").show()
  $(".line-item-1").show()
  $(".price").show()

})
var maxtime=15*60;


 setInterval(window.onload= function () {
   if (maxtime >= 0) {
     minutes = Math.floor(maxtime / 60);
     seconds=Math.floor(maxtime%60);
     $("#order-time").text(minutes+"分"+seconds+"秒")

     if (maxtime == 0){
       location.href="http://localhost:8888/Pay.do";
     };
     --maxtime;
   }}, 1000);