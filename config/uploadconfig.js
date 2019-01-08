const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");//用于保存上传文件的路径;
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //重命名
        // cb(null,file.originalname);
        //重命名2
        cb(null, fileFormat[0] + "-" + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    },

});
const upload = multer({
    storage: storage
});
module.exports = upload;