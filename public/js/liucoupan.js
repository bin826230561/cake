
// 页面加载的时候发ajax请求
$(function () {
    loadCoupan();
});
function loadCoupan(){
    $.ajax({
        type: "post",
        url: "/loadCoupan.do",
        data: {
            username: localStorage.getItem("u_phone"),
        },
        success: function (data) {
            if(data.length==0){
                $(".dataLength>span").html("0");
                $(".bgcHeight").css({padding:"100px 0",textAlign:"center",color:"#D5BFA7",fontSize:"12px"}).html("没有相关优惠券")
            }else{
                $(".dataLength>span").html(data.length);
                for(var i=0;i<data.length;i++){
                    $(".bgcHeight")[0].innerHTML+="     <div class=\"coupan\">\n" +
                        "                <div class=\"lookMessage\">\n" +
                        "                    <p>"+data[i].quan_name+"</p>\n" +
                        "                    <a href=\"#\" class='clickLook' onclick='clickLook(this)'>查看 ></a>\n" +
                        "                    <div></div>\n" +
                        "                    <p class=\"blockClick\">券号："+data[i].quan_num+"</p>\n" +
                        "                    <p class=\"blockClick\">"+data[i].quan_decription+"\n" +
                        "                    <img src=\"../images/6-7.jpg\" alt=\"\" width=\"45px\">\n" +
                        "                    <img src=\"../images/6-5.jpg\" alt=\"\" width=\"45px\">\n" +
                        "                    <img src=\"../images/3-2.jpg\" alt=\"\" width=\"45px\">\n" +
                        "                    <br>\n" +
                        "                    <p class=\"clearfix\"></p>\n" +
                        "                    <span>有效期：\n" +
                        "            <br>\n" +
                        "                "+data[i].quan_date1.split("T")[0] +"&nbsp;00:00:00\n" +
                        "            </span>\n" +
                        "\n" +
                        "                    <button class=\"cakePages\" onclick='userC()'>使用</button>\n" +
                        "                    <button>转赠</button>\n" +
                        "                    <p class=\"clearfix\"></p>\n" +
                        "\n" +
                        "                    <strong></strong>\n" +
                        "                    <strong></strong>\n" +
                        "                </div>\n" +
                        "            </div>"
                }
            }
        }
    })
}



function clickLook(obj){

    if (obj.innerHTML=="查看 &gt;") {

        $(obj).parent().find("img").css("display","block");
        $(obj).siblings(".blockClick").css("display","block");
        $(obj).html("收起 >");

        // 另一张优惠券隐藏
        $(obj).parent().parent().siblings().find("img").css("display","none");
        $(obj).parent().parent().siblings().find(".blockClick").css("display","none");
        $(obj).parent().parent().siblings().find("a").html("查看 >");


    }else{
        $(obj).siblings(".blockClick").css("display","none");
        $(obj).parent().find("img").css("display","none");
        $(obj).html("查看 >");
    }
}

// 点击使用
function userC(){
    window.open("/caketext-1")
}


