const bookmarkButtonSpan = document.querySelector(".bookmark span")
const bookmarkButton = document.querySelector(".bookmark")

const modal = document.querySelector("#default-modal")
const modalThank = document.querySelector("#thank-modal")
const showModal = document.querySelector(".modal-trigger")
const end = document.querySelector(".end")

const chosenButton = document.querySelector(".chosen-b")
const chosenButton2 = document.querySelector(".chosen2-b")
const chosenButton3 = document.querySelector(".chosen3-b")

const noReward = document.querySelector(".chosen")
const bamboo = document.querySelector(".chosen2")
const blackEdition = document.querySelector(".chosen3")
const finalButton = document.querySelectorAll(".close")
const black = document.querySelector(".black")

const reward = document.querySelector(".select")
const reward2 = document.querySelector(".select2")
const reward3 = document.querySelector(".select3")

const circle = document.querySelector("circle")
const path = document.querySelector("path")

const mobileButton = document.querySelector(".menu-mobile")
const mobileMenu = document.querySelector(".mobile")

bookmarkButton.addEventListener("click", ()=> {
    bookmarkButton.style.color = "hsl(176, 72%, 28%)"
    circle.setAttribute("fill", 'hsl(176, 50%, 47%)')
    path.setAttribute("fill", "#FFFFFF")
})

showModal.addEventListener("click", ()=> {
    modal.classList.toggle("hidden")
    black.classList.toggle("hidden")
})
chosenButton.addEventListener("click", () => {
    noReward.style.display = "flex"
})
chosenButton2.addEventListener("click", () => {
    bamboo.style.display = "flex"
})
chosenButton3.addEventListener("click", () => {
    blackEdition.style.display = "flex"
})

reward.addEventListener("click", () => {
    black.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    noReward.style.display = "flex"
    window.scrollTo(0, 0); 
})
reward2.addEventListener("click", () => {
    black.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    bamboo.style.display = "flex"
})
reward3.addEventListener("click", () => {
    black.classList.toggle("hidden")
    modal.classList.toggle("hidden")
    blackEdition.style.display = "flex"
})


finalButton.forEach(element => {
    element.addEventListener("click", ()=> {
        modal.classList.toggle("hidden")
        modalThank.classList.toggle("hidden")
        window.scrollTo(0, 0);
    })
});
end.addEventListener("click", ()=> {
    modalThank.classList.toggle("hidden")
    black.classList.toggle("hidden")
})

console.log(bookmarkButton.innerHTML)

window.addEventListener('load', () => {
    if(window.innerWidth < 376){
        bookmarkButtonSpan.innerHTML = ""
        bookmarkButton.classList.remove("pr-6")
        bookmarkButton.classList.remove("gap-3")

    }
});

mobileButton.addEventListener("click", ()=> {
    if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none"
    }else if(mobileMenu.style.display === "none" || mobileMenu.style.display === ""){
        mobileMenu.style.display = "block"
    }
})