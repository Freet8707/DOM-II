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