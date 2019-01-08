/** Created by LIU on 2018/12/9.*/
const replaceDao=require("../dao/replaceImg_dao_2");
const replace={
    replaceTou(req,resp){
        let uPhone=req.body.uphone;
        let pathName = "images/" + req.file.filename;//保存的路径
        // replaceDao.selectImg([uPhone]).
        // then(function (data) {
        //     if(data[0].u_img==null){
        //       console.log("图片为空")
        //     }
        // })
        // .catch(function (err) {
        //         resp.send(err)
        // })


        replaceDao.changeImg1([pathName, uPhone])
            .then(function (data) {
                resp.send("上传成功");
            })
            .catch(function (err) {
                resp.send(err)
            })
    },
    // 显示头像
    showFace(req,resp){
        let uPhone=req.body.uphone;
        replaceDao.showFace([uPhone])
            .then(function (data) {
                resp.send(data);
            })
            .catch(function (err) {
                resp.send(err)
            })
    },
};
module.exports=replace;


