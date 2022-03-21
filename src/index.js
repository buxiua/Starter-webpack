import _ from "lodash"
import css from "./index.css" // 导入css文件

function component(){
    let el = document.createElement("div")
    el.innerHTML = _.join(["hello"," webpack"],"!")
    return el
}

document.body.appendChild(component())