import _ from "lodash"

function component(){
    let el = document.createElement("div")
    el.innerHTML = _.join(["hello"," webpack"],"!")
    return el
}

document.body.appendChild(component())