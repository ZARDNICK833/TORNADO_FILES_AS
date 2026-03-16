const image = document.querySelector("[image-vw]")

const viewer = document.querySelector(".image-viewer")
image.addEventListener("click",()=>{
    viewer.style.display = "flex"
})
const header = viewer.querySelector("header")



header.querySelector("button").addEventListener("click",()=>{
        viewer.style.display = "none"
})