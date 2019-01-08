// 获取验证码
$("#obtain").on("click",function () {
    $.ajax({
        url:"/sendMsg.do",
        type:"post",
        success:function (data) {
            document.getElementById("appendP").innerHTML=data;
        }

    })
});



// 验证验证码
$("#submitSmg").on("click",function () {
    $.ajax({
        url:"/submitMsg.do",
        type:"post",
        data:{
            code:$("#smgS").val()
        },
        success:function (data) {
            if(data=="验证成功"){
                // window.location.href="surePassword.html";
                $("#windowL").attr("href","/windowL.do");
                window.location.href="/windowL.do";
            }else if(data=="验证失败"){
                document.getElementById("appendP").innerHTML="验证失败";
            }

        }
    })

});
