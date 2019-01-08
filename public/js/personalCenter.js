$(function () {
    var uphone = localStorage.getItem("u_phone");
    $("#phoneTab").html(localStorage.getItem("u_phone"));
    $("#spanText").html(localStorage.getItem("u_phone")); $.ajax({
        type: "post",
        url: "/showFace.do",
        data:{
            uphone:uphone
        },
        success: function (data) {
            document.getElementById("touXiangImg").src=data[0].u_img;
        }
    })
})

$("#inputFile").on("change", function () {
    var file = $("#inputFile")[0].files[0];
    var uphone = localStorage.getItem("u_phone");
    let formData = new FormData();
    formData.append('file', file);
    formData.append('uphone', uphone);
    $.ajax({
        type: "post",
        url: "/touXiang.do",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            $.ajax({
                type: "post",
                url: "/showFace.do",
                data:{
                    uphone:uphone
                },
                success: function (data) {
                      document.getElementById("touXiangImg").src=data[0].u_img;
                }
            })
        }
    })
});









