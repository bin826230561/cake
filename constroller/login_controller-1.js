// const path=require("path");
const login_dao = require("../dao/login_dao2_1");

const login_controller1 = {
    /*登陆请求*/
    login2(req,res){
        let user=req.body.user;
        let pwd=req.body.pwd;
        console.log(user)
        console.log(pwd)
        login_dao.dao_login2([user,pwd])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*修改状态*/
    changeState(req,res){
        let u_id=req.body.u_id;
        let u_zt=req.body.u_zt;
        login_dao.dao_changeState([u_zt,u_id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*钩子请求*/
    isLogin(req,res){
        let u_id=req.body.u_id;
        login_dao.dao_isLogin([u_id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
    /*加载用户信息*/
    loadAdmin(req,res){
        let u_id=req.query.u_id;
        login_dao.dao_loadAdmin([u_id])
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {//链式调用catch方法，异常捕获，有错误时返给客户端的方法
                res.send(err)
            })
    },
};
module.exports = login_controller1;//暴露对象,以便上级获取