const obtenerDivs = document.getElementsByClassName("div")
console.log ("divs listos:" + obtenerDivs)
const arrayDivs = Array.from(obtenerDivs)
console.log ("array: " + arrayDivs)
arrayDivs.forEach( divs => {
    const divFound = divs.id
    console.log(divFound)
    divs.addEventListener("click", () => cambiarColor(divFound))

})


function cambiarColor (elementoID , color = 'black'){
    let elemento = document.getElementById(elementoID);
        elemento.style.backgroundColor = color;
    }