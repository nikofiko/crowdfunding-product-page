const bookmarkButton = document.querySelector(".bookmark")
const circle = document.querySelector("circle")
const path = document.querySelector("path")

bookmarkButton.addEventListener("click", ()=> {
    bookmarkButton.style.color = "hsl(176, 72%, 28%)"
    circle.setAttribute("fill", 'hsl(176, 50%, 47%)')
    path.setAttribute("fill", "#FFFFFF")
})