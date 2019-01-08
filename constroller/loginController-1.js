const loginModel = require("../dao/login_dao");
const goodsController = {
    /*点击登录跳转登录页面*/
    loginPage(req, res) {
        res.render("login");
    },
    /*登录获取用户信息，并存入session中*/
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        loginModel.model_login([username, password])
            .then(function (data) {
                req.session.userID = data[0].u_id;//存储用户名ID
                req.session.userName = data[0].u_phone;//存储用户名
                res.send(data);
            }).catch(function (err) {
        })
    },
    /*退出登录释放空间*/
    deleteLogin(req, res) {
        req.session.destroy();
    },
};

module.exports = goodsController;//暴露对象,以便上级获取