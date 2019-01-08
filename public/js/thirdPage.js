var sum = 0;
$(".check-box-Dad").find('input[type=checkbox]').bind('click', function () {
  var a = $(this).parent().parent().prev().find("big").text()//单位价格

  var arrs = $(this).parent().siblings().children();

  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].checked) {
      sum -= +arrs[i].value * a;
    }
  }

  $(this).parent().siblings().children().attr("checked", false);
  var b = $(this).val() //蛋糕的重量
  b = Number(b);
  a = Number(a);
  var c= a * b; //蛋糕的总价格
  if (this.checked) {
    sum += c;
  }
  else{
    sum -= c;
  }
  $('#price').text(sum);

  /*=========================判断换购条件是否满足=============================*/
  if (sum > 200) {
    $("#tiaojian").show()
  } else {
    $("#tiaojian").hide()
  }
  /*=========================/判断换购条件是否满足=============================*/

});

// $(".addGoods").each(function (index, element) {
//   var clickTime=1;
//   $(element).on("click", function () {
//     if ($(this).attr("done") == undefined) {
//       $(this).attr("done", "true");
//       console.log(1111)
//       var $index = index + 1;
//       var $price = $(this).parent().prev().prev().text().split("/")[0];
//       var $bang = $(this).parent().prev().children(".border").text().trim().split(" ")[0].trim();
//       var $allPrice=$price;
//       $.ajax({
//         type: "post",
//         url: "/addGoods.do",
//         data: {
//           goods_id: $index,//商品ID
//           goods_bang: $bang,//商品规格
//           goods_price: $price,//商品单价
//           goods_num: clickTime,//商品数量
//           goods_count: $allPrice,//商品总价
//         },
//         success: function (data) {
//           /*这是为了刷新购物车的商品数量(无需刷新)*/
//           $.ajax({
//             url: "/getCount.do",
//             success: function (data) {
//               var goodsCount = data[0].num;
//               if (goodsCount > 0) {
//                 $(".buy-cart").children("span").show();
//                 $(".buy-cart").children("span").children("span").text(goodsCount);
//               } else {
//                 $(".buy-cart").children("span").hide();
//               }
//             }
//           })
//         }
//       })
//     } else {
//       clickTime++;
//       var $index = index + 1;
//       var $price = $(this).parent().prev().prev().text().split("/")[0];
//       var $price=parseInt(($price).split("￥")[1]);
//       var $allPrice=$price*clickTime;
//       var $allPrice="￥"+$price*clickTime+".00";
//       console.log($allPrice)
//       $.ajax({
//         type: "post",
//         url: "/changeGoodsNum.do",
//         data: {
//           goods_id: $index,//商品ID
//           goods_num: clickTime,//商品数量
//           goods_count: $allPrice,//商品总价
//         },
//         success: function (data) {
//           // cosnole.log(data)
//         }
//       })
//     }
//   })
// })


$("button").click(function () {

})