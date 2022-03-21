const path = require("path")

module.exports = {
    entry:"./src/index.js", // 指定webpack的打包入口地址
    output:{
        filename:"main.min.js", // 指定输出文件的文件名
        path:path.resolve(__dirname,"dist") // 指定输出文件的目录
    }
}