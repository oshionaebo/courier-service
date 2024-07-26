const dropdowns = document.getElementsByClassName("dropdown")
const udIcons = document.querySelectorAll(".ddbox i")
const slider = document.querySelectorAll(".slider")
const dots = document.querySelectorAll("#dots div")
const openNav = document.querySelector("#openNav")
const closeNav = document.querySelector("#closeNav")
const sideNav = document.querySelector("#sideNav")

openNav.onclick = function(){
    sideNav.classList.remove("w-0")
    sideNav.classList.add("w-[55%]")
}
closeNav.onclick = function(){
    sideNav.classList.remove("w-[55%]")
    sideNav.classList.add("w-0")
}

window.addEventListener("resize", function(){
    if (window.innerWidth > 768){
        sideNav.classList.remove("w-[55%]")
        sideNav.classList.add("w-0")
    }
})

let i = 1
function changeSlide(){
    setTimeout(function(){
        for (let j=0; j<slider.length; j++){
            if (!slider[j].classList.contains("hidden")){
                slider[j].classList.add("hidden")
            }
        }
        for (let k=0; k<dots.length; k++){
            if (dots[k].classList.contains("bg-gray-500")){
                dots[k].classList.remove("bg-gray-500")
                dots[k].classList.add("bg-gray-300")
            }
        }
        dots[i].classList.remove("bg-gray-300")
        dots[i].classList.add("bg-gray-500")
        slider[i].classList.remove("hidden")
        i = i + 1
        if (i===slider.length){
            i = 0
        }
        changeSlide()
    }, 3000)
}

changeSlide()

for (let i=0; i<dropdowns.length; i++){
    dropdowns[i].onclick = function(){
        // console.log(this.nextElementSibling.textContent)
        if (this.nextElementSibling.classList.contains("overflow-hidden")){
            this.nextElementSibling.classList.remove("overflow-hidden")
            this.nextElementSibling.classList.remove("max-h-0")
            this.nextElementSibling.classList.add("max-h-6")
            // this.style.height = this.scrollHeight + "px"
            udIcons[i].classList.remove("fa-arrow-down")
            udIcons[i].classList.add("fa-arrow-up")
        }
        else{
            this.nextElementSibling.classList.add("overflow-hidden")
            this.nextElementSibling.classList.add("max-h-0")
            this.nextElementSibling.classList.remove("max-h-6")
            // this.style.height = "0px"
            udIcons[i].classList.remove("fa-arrow-up")
            udIcons[i].classList.add("fa-arrow-down")
        }
        console.log(udIcons[i])
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("target-element")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                target.classList.add("opacity-100", "translate-y-0")
                target.classList.remove("opacity-0", "translate-y-10")
            }
        })
    }, {
        threshold: 0.1
    })
    observer.observe(target)
})