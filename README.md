## webpack

使用npx webpack进行编译时，当没有配置文件的时候，会默认将**src/index.js**作为入口文件，同时输出文件为dist/main.js

webpack的配置文件名为**webpack.config.js**，放置在项目的根目录中。

在webpack的配置文件中：

```javascript
const path = require("path") // 引入node的文件模块

module.exports = {
    entry:"./src/index.js", // 指定webpack的打包入口地址
    output:{
        filename:"main.min.js", // 指定输出文件的文件名
        path:path.resolve(__dirname,"dist") // 指定输出文件的目录，path.resolve
    }
}

```

$\color{red}{tips}$ : **path.resolve**函数将一个路径或路径片段的序列解析为一个绝对路径。

为了避免每次使用npx webpack命令进行打包编译代码，可以使用npm scripts来进行打包。在**package.json中**的scripts添加相应的命令
```json
"scripts":{
    "build":"webpack",
}
```
如此，我们就可以在命令行中直接使用**npm run build**来进行打包编译代码。

## 在webpack中打包css

在webpack中，万物皆可import,包括css,可以像使用js那样将css进行导入，但需要安装**style-loader**和**css-loader**。

```javascript
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
```
> webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。


如上配置以后，便可在<b>./src/index.js</b>中直接使用import将css温江像导入js文件一样导入，最终css文件将体现在打包后的网页的&lt;**style**&gt;标签中。(head--style)

## 在webpack中打包image文件

万物皆可**import**,图片亦是如此，使用**file-loader**可以将图片资源混合其中。

首先需要引入**file-loader**库，
```bash
npm i file-loader -S
```

然后在**webpack.config.js**中引入打包图片的相关规则

```javascript
// webpack.config.js
...
module.exports = {
    ...
    module:{
        rules:[
            ...
            {
                test:/\.(png|jpg|gif|svg|webp)$/,  // 引入file-loader打包规则，使其对图片资源进行打包。
                use:[
                    "file-loader"
                ]
            }
        ]
    }
}

```