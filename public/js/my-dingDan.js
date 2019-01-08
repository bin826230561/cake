$("#goPayM").on("click", function () {
    var d = new Date();
    var time = d.getFullYear() + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getDate() + "  " + d.getHours() + ":" + d.getMinutes();
    var orderNumber = d.getFullYear() + "" + d.getMonth() + "" + d.getDate() + "" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds();
    var address = $("#hText").html();
    var bothMoney=$("#total-amount").html();
    sessionStorage.orderNum=orderNumber;
    $.ajax({
        type: "post",
        url: "/dingdan.do",
        data: {
            username: localStorage.getItem("u_phone"),
            time: time,
            orderNumber: orderNumber,
            address: address,
            bothMoney:bothMoney
        },
        success: function () {
            console.log("hahahaha")
        }
    })
});


// 页面加载生成订单
$(function () {
    loadDing();
});

function loadDing() {
    $.ajax({
        type: "post",
        url: "/loadDing.do",
        data: {
            username: localStorage.getItem("u_phone")
        },
        success: function (data) {
            if (data.length == 0) {
                document.getElementById("tableDiv").innerHTML += "<div class='noDingdan'>没有相关订单</div>"
            } else {
                var data = data;
                for (var i = 0; i < data.length; i++) {
                    var dataTime = (data[i].ords_tiime).split("T")[0];
                    var dateI = parseInt(dataTime.split("-")[2]) + 1;
                    dataTime = dataTime.split("-")[0] + "-" + dataTime.split("-")[1] + "-" + dateI;
                    document.getElementById("tableDiv").innerHTML += "<table>\n" +
                        "                   <thead>\n" +
                        "                   <tr>\n" +
                        "                       <td align=\"left\" class='numberDan'> \n" +
                        "                           &ensp; &ensp;\n" +
                        "                           订单号:\n" + data[i].ords_num + "&ensp; &ensp;&ensp; &ensp;订单时间：" + dataTime +
                        "\n" +
                        "                       </td>\n" +
                        "                       <td> 廿一客感谢您的惠顾！</td>\n" +
                        "                       <td>订单信息</td>\n" +
                        "                       <td>支付方式</td>\n" +
                        "                       <td>订单状态</td>\n" +
                        "                       <td> <i class=\"iconfont\" onclick='delectDingD(this)'>&#xe6ee;</i></td>\n" +
                        "                   </tr>\n" +
                        "                   </thead>\n" +
                        "                   <tbody>\n" +
                        "                    <tr>\n" +
                        "                       <td>\n" +

                        "                       </td>\n" +
                        "                       <td></td>\n" +
                        "                       <td>\n" +
                        "                       <span>" + data[i].address_user + "&ensp;<i class=\"iconfont\">&#xe67d;</i></span>\n" +
                        "                      <div>\n" +
                        "                            <p>" + data[i].address_user + "</p>\n" +
                        "                             <p>" + data[i].address_place + "</p>\n" +
                        "                              <p>" + data[i].phone + "</p>\n" +
                        "                             </div>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                      <h4>总额："+data[i].bothMoney+"\n" +
                        "                      </h4>\n" +
                        "                      <br>\n" +
                        "                      <a href=\"/zhiFuFangShi.do?bothmoney="+data[i].bothMoney+"&ordsNum="+data[i].ords_num+"\">去支付</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <h4>\n" +
                        "" + data[i].state_name +
                        "                           </h4>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"/dingDandetail.do?ordsNum=" + data[i].ords_num + "\">编辑/查看详情</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <a href=\"invoice.html\">查看发票</a>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"logistics.html\">查看物流</a>\n" +
                        "                       </td>\n" +
                        "                   </tr> \n" +
                        "                   </tbody>\n" +
                        "               </table>\n"
                }
            }
            $.ajax({
                type: "post",
                url: "/detailCheck.do",
                data: {
                    username: localStorage.getItem("u_phone"),
                },
                success: function (data1) {
                    var tdT = $("table").children("tbody").children("tr").children("td");
                    tdT[0].innerHTML = "";
                    var n = 0;
                    var b = 1;
                    for (var k = 0; k < data.length; k++) {
                        for (var j = 0; j < data1.length; j++) {
                            if (data[k].ords_num == data1[j].ords_num) {

                                tdT[n].innerHTML += "<div>\n" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <img src=" + data1[j].goods_img + " alt=\"\" height=\"80\">\n" +
                                    "                         </a>" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <span>\n" +
                                    "                              " + data1[j].goods_description +
                                    "                                <br>\n" +
                                    "                                " + data1[j].shop_money + "/" + data1[j].goods_bang +
                                    "                            </span>\n" +
                                    "                         </a>" +
                                    "                    </div>"

                                tdT[b].innerHTML += " <div class='textCenter'>\n" +
                                    "                        " + "x" + data1[j].shop_count + "\n" +
                                    "                    </div>"
                            }
                        }
                        n += 6;
                        b += 6;
                    }
                }
            })


        }

    });
}


// 全部订单
$("#bothDing").on("click", function () {
    document.getElementById("tableDiv").innerHTML = "";
    $("#bothDing").css("color", "#71442A").siblings().css("color", "#D5BFA7");
    loadDing();
});




// 近一个月订单
$("#timeClick").on("click", function () {
    $("#timeClick").css("color", "#71442A").siblings().css("color", "#D5BFA7");
    var d = new Date();
    var dTime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    $.ajax({
        type: "post",
        url: "/nearTime.do",
        data: {
            username: localStorage.getItem("u_phone"),
        },
        success: function (data) {
            var data = data;
            document.getElementById("tableDiv").innerHTML = "";
            if (data.length == 0) {
                document.getElementById("tableDiv").innerHTML += "<div class='noDingdan'>没有相关订单</div>"
            } else {
                for (var i = 0; i < data.length; i++) {
                    var dataTime1 = (data[i].ords_tiime).split("T")[0];
                    var dateI = parseInt(dataTime1.split("-")[2]) + 1;
                    dataTime1 = dataTime1.split("-")[0] + "-" + dataTime1.split("-")[1] + "-" + dateI;
                    +"-" + dateI;
                    document.getElementById("tableDiv").innerHTML += "<table>\n" +
                        "                   <thead>\n" +
                        "                   <tr>\n" +
                        "                       <td align=\"left\" class='numberDan'> \n" +
                        "                           &ensp; &ensp;\n" +
                        "                           订单号:\n" + data[i].ords_num + "&ensp; &ensp;&ensp; &ensp;订单时间：" + dataTime1 +
                        "\n" +
                        "                       </td>\n" +
                        "                       <td> 廿一客感谢您的惠顾！</td>\n" +
                        "                       <td>订单信息</td>\n" +
                        "                       <td>支付方式</td>\n" +
                        "                       <td>订单状态</td>\n" +
                        "                       <td> <i class=\"iconfont\" onclick='delectDingD(this)'>&#xe6ee;</i></td>\n" +
                        "                   </tr>\n" +
                        "                   </thead>\n" +
                        "                   <tbody>\n" +
                        "                    <tr>\n" +
                        "                       <td>\n" +

                        "                       </td>\n" +
                        "                       <td></td>\n" +
                        "                       <td>\n" +
                        "                       <span>" + data[i].address_user + "&ensp;<i class=\"iconfont\">&#xe67d;</i></span>\n" +
                        "                      <div>\n" +
                        "                            <p>" + data[i].address_user + "</p>\n" +
                        "                             <p>" + data[i].address_place + "</p>\n" +
                        "                              <p>" + data[i].phone + "</p>\n" +
                        "                             </div>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                      <h4>总额:"+data[i].bothMoney+"\n" +
                        "                      </h4>\n" +
                        "                      <br>\n" +
                        "                      <a href=\"/zhiFuFangShi.do?bothmoney="+data[i].bothMoney+"&ordsNum="+data[i].ords_num+"\">去支付</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <h4>\n" +
                        "" + data[i].state_name +
                        "                           </h4>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"dingDandetail1.html\">编辑/查看详情</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <a href=\"invoice.html\">查看发票</a>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"logistics.html\">查看物流</a>\n" +
                        "                       </td>\n" +
                        "                   </tr> \n" +
                        "                   </tbody>\n" +
                        "               </table>\n"
                }
            }
            $.ajax({
                type: "post",
                url: "/neardetail.do",
                data: {
                    username: localStorage.getItem("u_phone"),
                },
                success: function (data1) {
                    console.log(data1)
                    var tdT = $("table").children("tbody").children("tr").children("td");
                    tdT[0].innerHTML = "";
                    var n = 0;
                    var b = 1;
                    for (var w = 0; w < data1.length; w++) {
                        var dataTime = (data1[w].ords_tiime).split("T")[0];
                        var sArr = dTime.split("-");
                        var eArr = dataTime.split("-");
                        var sRDate = new Date(sArr[0], sArr[1], sArr[2]);
                        var eRDate = new Date(eArr[0], eArr[1], eArr[2]);
                        var days = (sRDate - eRDate) / (24 * 60 * 60 * 1000);
                        if (days <= 30) {
                            for (var k = 0; k < data.length; k++) {
                                for (var j = 0; j < data1.length; j++) {
                                    if (data[k].ords_num == data1[j].ords_num) {
                                        tdT[n].innerHTML += "<div>\n" +
                                            "                         <a href=" + data1[j].shop_address + ">" +
                                            "                        <img src=" + data1[j].goods_img + " alt=\"\" height=\"80\">\n" +
                                            "                         </a>" +
                                            "                         <a href=" + data1[j].shop_address + ">" +
                                            "                        <span>\n" +
                                            "                              " + data1[j].goods_description +
                                            "                                <br>\n" +
                                            "                                " + data1[j].shop_money + "/" + data1[j].goods_bang +
                                            "                            </span>\n" +
                                            "                         </a>" +
                                            "                    </div>"

                                        tdT[b].innerHTML += " <div class='textCenter'>\n" +
                                            "                        " + "x" + data1[j].shop_count + "\n" +
                                            "                    </div>"
                                    }
                                }
                                n += 6;
                                b += 6;
                            }
                        }
                    }
                }
            })
        }
    });
});


// 未完成订单
$("#noFinish").on("click", function () {
    $("#noFinish").css("color", "#71442A").siblings().css("color", "#D5BFA7");
    $.ajax({
        type: "post",
        url: "/noFinish.do",
        data: {
            username: localStorage.getItem("u_phone"),
            inputNum: $("#inputNum").val()
        },
        success: function (data) {
            document.getElementById("tableDiv").innerHTML = "";
            if (data.length == 0) {
                document.getElementById("tableDiv").innerHTML += "<div class='noDingdan'>没有相关订单</div>"
            } else {
                var data = data;
                for (var i = 0; i < data.length; i++) {
                    var dataTime = (data[i].ords_tiime).split("T")[0];
                    var dateI = parseInt(dataTime.split("-")[2]) + 1;
                    dataTime = dataTime.split("-")[0] + "-" + dataTime.split("-")[1] + "-" + dateI;
                    document.getElementById("tableDiv").innerHTML += "<table>\n" +
                        "                   <thead>\n" +
                        "                   <tr>\n" +
                        "                       <td align=\"left\" class='numberDan'> \n" +
                        "                           &ensp; &ensp;\n" +
                        "                           订单号:\n" + data[i].ords_num + "&ensp; &ensp;&ensp; &ensp;订单时间：" + dataTime +
                        "\n" +
                        "                       </td>\n" +
                        "                       <td> 廿一客感谢您的惠顾！</td>\n" +
                        "                       <td>订单信息</td>\n" +
                        "                       <td>支付方式</td>\n" +
                        "                       <td>订单状态</td>\n" +
                        "                       <td> <i class=\"iconfont\" onclick='delectDingD(this)'>&#xe6ee;</i></td>\n" +
                        "                   </tr>\n" +
                        "                   </thead>\n" +
                        "                   <tbody>\n" +
                        "                    <tr>\n" +
                        "                       <td>\n" +

                        "                       </td>\n" +
                        "                       <td></td>\n" +
                        "                       <td>\n" +
                        "                       <span>" + data[i].address_user + "&ensp;<i class=\"iconfont\">&#xe67d;</i></span>\n" +
                        "                      <div>\n" +
                        "                            <p>" + data[i].address_user + "</p>\n" +
                        "                             <p>" + data[i].address_place + "</p>\n" +
                        "                              <p>" + data[i].phone + "</p>\n" +
                        "                             </div>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                      <h4>总额："+data[i].bothMoney+"\n" +
                        "                      </h4>\n" +
                        "                      <br>\n" +
                        "                      <a href=\"/zhiFuFangShi.do?bothmoney="+data[i].bothMoney+"&ordsNum="+data[i].ords_num+"\">去支付</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <h4>\n" +
                        "" + data[i].state_name +
                        "                           </h4>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"dingDandetail1.html\">编辑/查看详情</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <a href=\"invoice.html\">查看发票</a>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"logistics.html\">查看物流</a>\n" +
                        "                       </td>\n" +
                        "                   </tr> \n" +
                        "                   </tbody>\n" +
                        "               </table>\n"
                }
            }
            $.ajax({
                type: "post",
                url: "/nodetail.do",
                data: {
                    username: localStorage.getItem("u_phone"),
                },
                success: function (data1) {
                    var tdT = $("table").children("tbody").children("tr").children("td");
                    tdT[0].innerHTML = "";
                    var n = 0;
                    var b = 1;
                    for (var k = 0; k < data.length; k++) {
                        for (var j = 0; j < data1.length; j++) {
                            if (data[k].ords_num == data1[j].ords_num) {

                                tdT[n].innerHTML += "<div>\n" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <img src=" + data1[j].goods_img + " alt=\"\" height=\"80\">\n" +
                                    "                         </a>" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <span>\n" +
                                    "                              " + data1[j].goods_description +
                                    "                                <br>\n" +
                                    "                                " + data1[j].shop_money + "/" + data1[j].goods_bang +
                                    "                            </span>\n" +
                                    "                         </a>" +
                                    "                    </div>"

                                tdT[b].innerHTML += " <div class='textCenter'>\n" +
                                    "                        " + "x" + data1[j].shop_count + "\n" +
                                    "                    </div>"
                            }
                        }
                        n += 6;
                        b += 6;
                    }
                }
            })

        }
    });
});


// 查找订单号
$("#checkNumber").on("click", function () {
    $.ajax({
        type: "post",
        url: "/searchD.do",
        data: {
            username: localStorage.getItem("u_phone"),
            inputNum: $("#inputNum").val()
        },
        success: function (data) {
            document.getElementById("tableDiv").innerHTML = "";
            if (data.length == 0) {
                document.getElementById("tableDiv").innerHTML += "<div class='noDingdan'>没有相关订单</div>"
            } else {
                var data = data;
                for (var i = 0; i < data.length; i++) {
                    var dataTime = (data[i].ords_tiime).split("T")[0];
                    var dateI = parseInt(dataTime.split("-")[2]) + 1;
                    dataTime = dataTime.split("-")[0] + "-" + dataTime.split("-")[1] + "-" + dateI;
                    document.getElementById("tableDiv").innerHTML += "<table>\n" +
                        "                   <thead>\n" +
                        "                   <tr>\n" +
                        "                       <td align=\"left\" class='numberDan'> \n" +
                        "                           &ensp; &ensp;\n" +
                        "                           订单号:\n" + data[i].ords_num + "&ensp; &ensp;&ensp; &ensp;订单时间：" + dataTime +
                        "\n" +
                        "                       </td>\n" +
                        "                       <td> 廿一客感谢您的惠顾！</td>\n" +
                        "                       <td>订单信息</td>\n" +
                        "                       <td>支付方式</td>\n" +
                        "                       <td>订单状态</td>\n" +
                        "                       <td> <i class=\"iconfont\" onclick='delectDingD(this)'>&#xe6ee;</i></td>\n" +
                        "                   </tr>\n" +
                        "                   </thead>\n" +
                        "                   <tbody>\n" +
                        "                    <tr>\n" +
                        "                       <td>\n" +

                        "                       </td>\n" +
                        "                       <td></td>\n" +
                        "                       <td>\n" +
                        "                       <span>" + data[i].address_user + "&ensp;<i class=\"iconfont\">&#xe67d;</i></span>\n" +
                        "                      <div>\n" +
                        "                            <p>" + data[i].address_user + "</p>\n" +
                        "                             <p>" + data[i].address_place + "</p>\n" +
                        "                              <p>" + data[i].phone + "</p>\n" +
                        "                             </div>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                      <h4>总额："+data[i].bothMoney+"\n" +
                        "                      </h4>\n" +
                        "                      <br>\n" +
                        "                      <a href=\"/zhiFuFangShi.do?bothmoney="+data[i].bothMoney+"&ordsNum="+data[i].ords_num+"\">去支付</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <h4>\n" +
                        "" + data[i].state_name +
                        "                           </h4>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"dingDandetail1.html\">编辑/查看详情</a>\n" +
                        "                       </td>\n" +
                        "                       <td>\n" +
                        "                           <a href=\"invoice.html\">查看发票</a>\n" +
                        "                           <br>\n" +
                        "                           <a href=\"logistics.html\">查看物流</a>\n" +
                        "                       </td>\n" +
                        "                   </tr> \n" +
                        "                   </tbody>\n" +
                        "               </table>\n"
                }
            }
            $.ajax({
                type: "post",
                url: "/detailInput.do",
                data: {
                    username: localStorage.getItem("u_phone"),
                    inputNum: $("#inputNum").val()
                },
                success: function (data1) {
                    console.log(data1)
                    var tdT = $("table").children("tbody").children("tr").children("td");
                    tdT[0].innerHTML = "";
                    var n = 0;
                    var b = 1;
                    for (var k = 0; k < data.length; k++) {
                        for (var j = 0; j < data1.length; j++) {
                            if (data[k].ords_num == data1[j].ords_num) {

                                tdT[n].innerHTML += "<div>\n" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <img src=" + data1[j].goods_img + " alt=\"\" height=\"80\">\n" +
                                    "                         </a>" +
                                    "                         <a href=" + data1[j].shop_address + ">" +
                                    "                        <span>\n" +
                                    "                              " + data1[j].goods_description +
                                    "                                <br>\n" +
                                    "                                " + data1[j].shop_money + "/" + data1[j].goods_bang +
                                    "                            </span>\n" +
                                    "                         </a>" +
                                    "                    </div>"

                                tdT[b].innerHTML += " <div class='textCenter'>\n" +
                                    "                        " + "x" + data1[j].shop_count + "\n" +
                                    "                    </div>"

                            }
                        }
                        n += 6;
                        b += 6;
                    }
                }
            })

        }
    });
});


// 删除订单
function delectDingD(obj) {
    var lengthT = obj.parentNode.parentNode.parentNode.parentNode;
    var tdHtml = lengthT.firstElementChild.firstElementChild.firstElementChild.innerHTML;
    var lastText = tdHtml.split(":")[1].split(" ")[0].trim();
    $.ajax({
        type: "post",
        url: "/deleteDingdan.do",
        data: {
            username: localStorage.getItem("u_phone"),
            lastText: lastText
        },
        success: function () {
            document.getElementById("tableDiv").innerHTML = "";
            loadDing()
        }
    })


}


// $(function () {
//     $("#section .dingDan-hd ul li").each(function (index, element) {
//         $(element).on("click", function () {
//             $(this).addClass("colorLi").siblings().removeClass("colorLi")
//             if (index == 0) {
//                 $(".dingDan-bd-noSuccess").addClass("show");
//                 $(".dingDan-bd-now").removeClass("show");
//                 $(".dingDan-bd-ago").removeClass("show");
//             } else if (index == 1) {
//                 $(".dingDan-bd-noSuccess").removeClass("show");
//                 $(".dingDan-bd-now").addClass("show");
//                 $(".dingDan-bd-ago").removeClass("show");
//             } else {
//                 $(".dingDan-bd-noSuccess").removeClass("show");
//                 $(".dingDan-bd-now").removeClass("show");
//                 $(".dingDan-bd-ago").addClass("show");
//             }
//         })
//     })
// });