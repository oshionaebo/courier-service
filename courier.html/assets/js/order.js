const firstPart = document.querySelector(".first-part")
const secondPart = document.querySelector(".second-part")
const addAddress = document.querySelector("#add-address")
const goBack = document.querySelector("#goBack")
const shipnow = document.querySelector("div.fin-buttons button")
const amountInput = document.querySelector("#amount-input")    
const dateInput = document.querySelector("#date-input")    
const contBook = document.querySelector("button.cont-book")   

const parcelWeight = document.getElementById("parcelweight")
const parcelLength = document.getElementById("parcellength")
const parcelWidth = document.getElementById("parcelwidth")
const parcelHeight = document.getElementById("parcelheight")
const parcelQuantity = document.getElementById("parcelquantity")

const validInputs = document.querySelectorAll(".validate input")

console.log("this is the order js")

shipnow.onclick = function(event){
    event.preventDefault()
    console.log("the button was clicked again")

    const calcValue = Number(parcelWeight.textContent) * Number(parcelLength.textContent) * Number(parcelHeight.textContent) * Number(parcelWidth.textContent) * Number(parcelHeight.textContent) * Number(parcelQuantity.textContent) * 100

    const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currencyDisplay: "symbol"
    }).format(calcValue)

    amountInput.value = calcValue

    let currDate = new Date()
    // amountInput.value = moment(currDate).calendar()
    let futureDate = moment(currDate).add(3, "days")
    // dateInput.value = moment(futureDate).format("LL")
    dateInput.value = moment(futureDate).format("YYYY-MM-DD HH:mm:ss")

}
// addAddress.click()
// addAddress.onclick = function(event){
//     event.preventDefault()
//     firstPart.style.display = "none"
    // secondPart.style.display = "block"
//     secondPart.classList.add("slidein")
// }
// goBack.onclick = function(event){
//     event.preventDefault()
    // secondPart.style.display = "none"
//     secondPart.classList.remove("slidein")
//     firstPart.style.display = "block"
// }
addAddress.onclick = function(event){
    event.preventDefault()
    secondPart.classList.add("slidein")
}
contBook.onclick = function(event){
    event.preventDefault()

    const calcValue = Number(parcelWeight.textContent) * Number(parcelLength.textContent) * Number(parcelHeight.textContent) * Number(parcelWidth.textContent) * Number(parcelHeight.textContent) * Number(Quantity.textContent) * 100

    const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currencyDisplay: "symbol"
    }).format(720000)

    amountInput.value = 720000
}

const pvCountry = document.getElementById("pvcountry")
function getCountries(lang="eng"){
    const A = 65
    const Z = 90
    const countryName = new Intl.DisplayNames([lang], {type: "region"})
    const countries = {}
    for (let i=A; i<=Z; i++){
        for (let j=A; j<=Z; ++j){
            let code = String.fromCharCode(i) + String.fromCharCode(j)
            let name = countryName.of(code)
            if(code !== name){
                countries[code] = name
            }
        }
    }
    return countries
}
const countryListObject = getCountries()

const countryList = Object.values(countryListObject)
console.log(countryList.length)
for (let i=0; i<countryList.length; i++){
    const newOption = document.createElement("option")
    newOption.value = countryList[i]
    newOption.textContent = countryList[i]
    pvCountry.appendChild(newOption)
}

// for (let i=0; i<validInputs.length; i++){
//     validInputs[i].onblur = function(){
//         // console.log(this.id)
//         // alert("You have left the input field")
//         switch(this.id){
//             case "country":{
//                 console.log("this is the country section")
//                 break
//             }
//             case "zipcode":{
//                 console.log("this is the Zip code section")
//                 break
//             }
//             default:{
//                 console.log("Dont know this option")
//             }
//         }
//     }
// }