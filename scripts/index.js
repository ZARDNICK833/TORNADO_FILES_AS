const images = document.querySelectorAll("[image-vw]")

const viewer = document.querySelector(".image-viewer")
for (const img of images){
    img.addEventListener("click",()=>{
    viewer.style.display = "flex"
    viewer.querySelector("img").src = img.src
})
}
const header = viewer.querySelector("header")



header.querySelector("button").addEventListener("click",()=>{
        viewer.style.display = "none"
})