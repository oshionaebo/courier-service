const validInputs = document.querySelectorAll(".validate input")

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