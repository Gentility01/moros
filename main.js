// // const fopp = document.getElementsByClassName("foter-content")
// // console.log(fopp)
// // console.log(document.querySelector('ul'))
// // console.log("testing")

// const sree = document.querySelector("button.btn1")
// console.log(document.getElementsByClassName(".btn1"))

// console.log(sree)
// console.log("testing")

// const  create = document.createElement("h1").innerText="heading"
// create.className="man"
// console.log(create)

// console.log(document.querySelector(".man"))
// console.log(document.getElementsByClassName("man"))

// const botton = document.createElement("button")
// botton.className = "ooo"
// botton.appendChild(document.createTextNode("click"))

// const oldButton = document.querySelector(".ooo");

// const parentElement = document.querySelector(".foter-content")

// console.log(oldButton)

// parentElement.replaceChild(botton,oldButton)
// document.querySelector("button.btn1").addEventListener("click",
// function(){
//     alert("submitted")
// })



const first = document.querySelector(".ooo")
const inn = document.querySelector("input")
const second = document.querySelector(".footer")
inn.addEventListener("click", include)

function include(){
    if (inn = inn.include("@")) {
        alert("submitted")
        
    }else{
        alert("this is not a complete email")
    }

}

console.log(inn)
//click
first.addEventListener("click", man)
//mouseenter
// first.addEventListener("mouseenter", man)
//mouseleave
// first.addEventListener("mouseleave", man)
//double click
// first.addEventListener("dblclick", onclick)
function man(e){
    alert("submitted")
    console.log(`EVENT TYPE ${e.type}`)
    
}

// second.style.background="red"
second.addEventListener("mousemove", move)

function move (e){
    second.style.background = `rgb(${e.offsetX},${e.offsetY}, 45)`

}

