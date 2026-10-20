import { getNewImage } from "./controller.js"
import { fetchImage } from "./model.js"

export function buildDog(result){
    const imagediv = document.createElement("div")
   const image = document.createElement("img")
   image.src = result.message

    image.addEventListener("click", getNewImage)

    imagediv.appendChild(image)
    document.getElementById("app").appendChild(imagediv)
}

export function statics(){
    let html = 
    '<section><p>🐶 My Dog</p></section>'

    document.getElementById("app").innerHTML += html
}