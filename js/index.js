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