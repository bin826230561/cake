$("#surePassword1").on("blur",function () {
    var reg=/^[0-9]{1,16}$/;
    var surePassword1=document.getElementById("surePassword1").value;
    if(reg.test(surePassword1)==false){
        document.getElementById("appen").innerHTML="密码由1-16位数字组成";
    }
});

// 第二个密码框的确认密码一致
$("#surePassword2").on("focus",function () {
    var surePassword1=document.getElementById("surePassword1").value;
    if (surePassword1=="") {
        document.getElementById("appen").innerHTML="请先输入密码";
    }
}).on("blur",function () {
    var surePassword1=document.getElementById("surePassword1").value;
    var surePassword2=document.getElementById("surePassword2").value;
    if (surePassword1!=surePassword2){
        document.getElementById("appen").innerHTML="两次密码输入不一致";
    }else if (surePassword1==surePassword2){
        document.getElementById("appen").innerHTML="";
    }
});


// 点击按钮判断

$("#buttonS").on("click",function () {
    var surePassword1=document.getElementById("surePassword1").value;
    var surePassword2=document.getElementById("surePassword2").value;
    if (surePassword1=="") {
        document.getElementById("appen").innerHTML="请先输入密码";
    }else{
        if(surePassword2==""){
            document.getElementById("appen").innerHTML="请确认密码";
        }else{
            if(surePassword1!=surePassword2){
                document.getElementById("appen").innerHTML="两次密码输入不一致";
            }else{
                $.ajax({
                    url:"/sPassword.do",
                    type:"post",
                    data:{
                        phone:localStorage.getItem("passport"),
                        password:surePassword1,
                    },
                    success:function (data) {

                        if(data=="修改成功"){
                             $("#pay").attr("href","/controgin.do");
                            window.location.href="/controgin.do"
                        }else{
                            document.getElementById("appen").innerHTML="修改失败";
                        }
                    },
                    err:function (data) {

                    }
                })
            }
        }
    }
});
