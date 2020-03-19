// Your code goes here
const imageZoom = document.querySelector("img")

imageZoom.addEventListener("mouseenter", () => {
    imageZoom.style.transform = "scale(1.2)"
    imageZoom.style.transition = "all 0.3s"
})

imageZoom.addEventListener("mouseleave", () => {
    imageZoom.style.transform = "scale(1)"
    imageZoom.style.transition = "all 0.3s"
})

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((element) =>{
    element.addEventListener("mouseenter", () => {
        element.style.color = "#A7C4CB";
    })
    element.addEventListener("mouseleave", () => {
        element.style.color = "#212529"
    })
})

const h2Selector = document.querySelectorAll("h2") 
h2Selector.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.color = "#1df900"
        element.style.fontSize = "3.5rem"
    })
})

const intro = document.querySelector(".intro")
const firstP = document.querySelector("p")
firstP.addEventListener("dblclick", () => {
    intro.style.border = "none"
    firstP.style.color = "#a123ea"
})



const imgList = document.querySelectorAll("img")
imgList[1].addEventListener("mouseover", (element) => {
    imgList[1].src = "https://picsum.photos/200/200"
    imgList[1].style.width = "100%"
    imgList[1].style.height = "auto"
})

imgList[2].addEventListener("click", () => {
    imgList[2].classList.add("jeremys-class")
})

const navSelector = document.querySelector("body")
const bodySelector = document.querySelector("html")
bodySelector.addEventListener("keydown", (event) => {
    
    if(event.keyCode === 13){
        console.log(event.which)
        navSelector.style.backgroundColor = "white"
    } else {
        navSelector.style.backgroundColor = "red"
    }

})

const footerSelector = document.querySelector(".footer")
navLinks[0].addEventListener("contextmenu", () =>{
    footerSelector.style.background = "red"
})

const destinationDiv = document.querySelector(".destination")
const desth4 = document.querySelector(".destination h4")
console.log(desth4)
desth4.addEventListener("drag", () =>{
    destinationDiv.style.color = "purple"
})
desth4.addEventListener("dragend", () => {
    destinationDiv.style.color = "black"
})