const sections = document.querySelectorAll("div.admin-body>div")
const secHeads = document.querySelectorAll("div.admin-header div")
const addButtons = document.querySelectorAll("button.admindelete-btn")
// for (let i=0; i<sections.length; i++){
//     sections[i].style.display = "none"
// }
// document.getElementsByClassName("overview-head")[0].click()
function changeSection(elm, section){
    for (let i=0; i<secHeads.length; i++){
        // secHeads[i].style.borderBottom = "none"
        secHeads[i].classList.remove("anim")
    }
    for (let i=0; i<sections.length; i++){
        // sections[i].style.display = "none"
        sections[i].classList.remove("secbody")
    }
    // elm.style.borderBottom = "3px solid #4caf50"
    elm.classList.add("anim")
    // document.getElementsByClassName(section)[0].style.display = "block"
    document.getElementsByClassName(section)[0].classList.add("secbody")
}

for (let i=0; i<addButtons.length; i++){
    addButtons[i].onclick = function(){
        const id = this.id
        // location.reload(false)
        fetch(`http://127.0.0.1:8000/accounts/admin-dashboard/${id}/delete-track`)
        .then(resp => resp.json())
        .then(data => {
            // document.reload()
            location.reload()
        })
    }

}