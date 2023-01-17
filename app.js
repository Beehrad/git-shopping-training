const modalBtn = document.querySelector(".charkh")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const confirmBtn = document.querySelector(".confirm")


modalBtn.addEventListener("click" , ()=>{
    backdrop.style.display = "flex"
    modal.style.transform = "translateY(0vh)";
    modal.style.opacity = "1"
})

confirmBtn.addEventListener("click" , ()=>{
    backdrop.style.display = "none"
    modal.style.transform = "translateY(-100vh)";
    modal.style.opacity = "0"
})