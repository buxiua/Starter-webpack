import _ from "lodash"
import css from "./index.css" // 导入css文件
import mu1 from "./images/mu1.jpg"
import mu from "./images/mu1.webp"

function component(){
    let el = document.createElement("div")
    el.innerHTML = _.join(["hello"," webpack"],"!")
    return el
}

let imageEl = new Image();
imageEl.src = mu1;

let imageEl1 = new Image();
imageEl1.src = mu;


document.body.appendChild(component())
document.body.appendChild(imageEl)
document.body.appendChild(imageEl1)