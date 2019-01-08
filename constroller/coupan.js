/** Created by LIU on 2018/12/9.*/
const conpanDao=require("../dao/coupandao");

const coupan={
    // 加载页面
    loadcoupan(req,resp){
        resp.render("liucoupan")
    },
    // 丛数据库传值
    coupan(req,resp){
        conpanDao.searchCoupan([req.body.username])
            .then(function (data) {
                resp.send(data);

            },function (err) {
                console.log(err)
            })
},
};

module.exports=coupan;