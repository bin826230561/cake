
// 点击编辑出现输入框
$("#editFaPiao").on("click",function () {
    $(".invoice-show").slideDown(500)
});

// 点击取消隐藏输入框
$("#quXiao").on("click",function () {
    $(".invoice-show").slideUp(500)
});


// 点击确定的时候判断
$("#queDing").on("click",function () {
    // 纳税人识别号正则
    var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{15,20}$/;
    // 电话号码正则
    var reg1=/^[0-9]{11}$/;

    var input=$("label input:checked").parent().text();
    console.log(input);

  // 判断那随人识别号是否为空
if ($("#personNum").val()=="") {
    $("#appendText").html("纳税人识别号不能为空")

// 不为空
}else if($("#personNum").val()!=""){
    // 发端纳税人识别号是否符合人正则
   if(reg.test($("#personNum").val())==false){
       $("#appendText").html("纳税人识别号必须是15-20位字符")

       // 符合的情况
   }else if (reg.test($("#personNum").val())==true) {
       // 判断发牌抬头是否为空
       if ($("#headFa").val()=="") {
           $("#appendText").html("请填写发票抬头")
       }else if($("#headFa").val()!=""){

           // 判断电话号码是否为空
           if($("#phoneE").val()==""){
               $("#appendText").html("请填写电话号码")
           }else if ($("#phoneE").val()!="") {
               if (reg1.test($("#phoneE").val())==false){
                   $("#appendText").html("电话号码格式错误")
               }else{
                   $("#appendText").html("");
                   $("#personNumA").html($("#personNum").val()); //纳税人识别号
                   $("#phoneShou").html($("#phoneE").val());  //电话
                   $("#faPiao").html($("#headFa").val());//姓名
                   $("#company").html(input);
                   $("#faPiaoType").html($("select option:selected").text());//下拉框
                   $("#emailP").html($("#email").val());  //邮箱
                   $(".invoice-show").slideUp(500);
                   console.log($("#headFa").val())


                   $.ajax({
                       type:"post",
                       url:"/faPiao.do",
                       data:{
                           ordsNum:$(".ordsNum").html(),
                           invoiceNumber:$("#personNum").val(),
                           invoiceName:$("#headFa").val(),
                           invoicePhone:$("#phoneE").val(),
                           invoiceMessage:$("select option:selected").text(),
                           invoiceType:input,
                           invoiceEmail:$("#email").val()
                       },
                       success:function () {
                           console.log("hahahaha")
                       }
                   })


               }
           }
       }
   }
}

});



// 点击付款跳转页面
$("#payMoney").on("click",function () {
    window.location.href="/zhiFuFangShi"
});

// 点击取消并重订
$("#btnQu").on("click",function () {
    window.location.href="/caketext-1"
});