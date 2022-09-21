let switchBtn = document.querySelector(".switcher-btn")
let colorSwitcher = document.querySelector(".color-switcher")

let themeBtns = document.querySelectorAll(".theme-buttons")


if(window.localStorage.getItem("color")){
    document.querySelector(":root").style.setProperty("--main-color", window.localStorage.getItem("color"))
}


switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("play")  
    colorSwitcher.classList.toggle("open")  
})

themeBtns.forEach(colorBtn => {
    colorBtn.addEventListener("click", ()=> {
        let dataColor = colorBtn.dataset.color;
        document.querySelector(":root").style.setProperty("--main-color", dataColor)
        saveToLocalStorage(dataColor)
    })
})

function saveToLocalStorage(color){
    window.localStorage.setItem("color", color)
}