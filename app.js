const modalBtn = document.querySelector(".charkh")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")


modalBtn.addEventListener("click" , ()=>{
    backdrop.style.display = "flex"
    modal.style.transform = "translateY(0vh)";
    modal.style.opacity = "1"
})