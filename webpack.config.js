const path = require("path")

module.exports = {
    entry:"./src/index.js", // 指定webpack的打包入口地址
    output:{
        filename:"main.min.js", // 指定输出文件的文件名
        path:path.resolve(__dirname,"dist") // 指定输出文件的目录
    },
    module:{
        rules:[
            {
                test:/\.css$/,  // 使用正则表达式进行匹配，说明哪些文件使用下面的规则
                use:[ // 使用style-loader,css-loader对css文件进行打包。
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}