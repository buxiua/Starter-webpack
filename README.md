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