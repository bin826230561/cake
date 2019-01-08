const jnModel = require("../dao/jn_dao-2");
const jnController = {
    /*进入页面加载数据库中的信息*/
    loadJiNr(req, res) {
        let u_id = req.body.u_id;
        jnModel.model_jn([u_id])
            .then(function (data) {
                res.render("my-jinianri", {myJn: data})
                console.log(data)
            }).catch(function (err) {
        })
    },

    /*添加纪念日*/
    addMyJN(req, res) {
        let u_id = req.body.u_id;
        let jinianri = req.body.jinianri;
        let guanxi = req.body.guanxi;
        let date = req.body.date;
        let tel = req.body.tel;
        let zt = req.body.zt;
        jnModel.model_addMyJN([null, jinianri, guanxi, date, tel, u_id, zt])
            .then(function (data) {
                res.send(data)
            }).catch(function (err) {
        })
    },
    /*删除纪念日*/
    deleteMyJN(req, res) {
        let del_id = req.query.del_id;
        jnModel.model_deleteMyJN([del_id])
            .then(function (data) {
                res.send(data)
            }).catch(function (err) {
        })
    },
    /*编辑纪念日*/
    changeMyJN(req, res) {
        let change_id = req.body.change_id;
        let u_id = req.body.u_id;
        let jinianri = req.body.jinianri;
        let guanxi = req.body.guanxi;
        let date = req.body.date;
        let tel = req.body.tel;
        let zt = req.body.zt;
        jnModel.model_changeMyJN([jinianri,guanxi,date,tel,zt,change_id,u_id])
            .then(function (data) {
                res.send(data)
            }).catch(function (err) {
        })
    },

};

module.exports = jnController;//暴露对象,以便上级获取