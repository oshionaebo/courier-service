const dHead = document.querySelector(".dhead")
const dDropdown = document.querySelector(".ddrop-down")
const pnicon = document.querySelector(".dhead p")
const picknicon = document.querySelector(".phead p")
const pDropdown = document.querySelector(".pdrop-down")
const pHead = document.querySelector(".phead")

let ddisp = false
let pdisp = false

dHead.onclick = function(){
    console.log("the dhead was clicked")
    // dDropdown.classList.toggle("anim")
    if(ddisp){
        dDropdown.style.maxHeight = 0
        pnicon.textContent = "+"
        ddisp = false
    }
    else{
        dDropdown.style.maxHeight = dDropdown.scrollHeight + "px"
        pnicon.textContent = "-"
        ddisp = true
    }
}
pHead.onclick = function(){
    console.log("the phead was clicked")
    // dDropdown.classList.toggle("anim")
    if(pdisp){
        pDropdown.style.maxHeight = 0
        picknicon.textContent = "+"
        pdisp = false
    }
    else{
        pDropdown.style.maxHeight = pDropdown.scrollHeight + "px"
        picknicon.textContent = "-"
        pdisp = true
    }
}

function initMap(){
    const location = {lat: 37.7749, lng: -122.4194}
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12,
    })
    const marker = new google.maps.Marker({
        position: location,
        map: map
    })
}
initMap()