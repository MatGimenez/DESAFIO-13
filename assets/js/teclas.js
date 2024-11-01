//VARIABLES GLOBALES
let colorDiv = document.addEventListener("keydown", function(event){
    let colorGlobal = ''
    if (event.key === 'a'){
        //console.log("a")
        colorGlobal = 'pink'
        pintar(colorGlobal)
    } else if (event.key === 's'){
        //console.log("s")
        colorGlobal = 'orange'
        pintar(colorGlobal)
    } else if (event.key === 'd'){
        //console.log("d")
        colorGlobal = 'lightblue'
        pintar(colorGlobal)
    }
})

function pintar(color){
    let div = document.getElementById("key")
    div.style.backgroundColor = color
}

let nuevoDiv = document.addEventListener("keydown", function(event){
    let colorGlobal2 = ''
    if (event.key === 'q'){
        //console.log("q")
        colorGlobal2 = 'purple'
        crearDiv(colorGlobal2)
    } else if (event.key === 'w'){
        //console.log('w')
        colorGlobal2 = 'gray'
        crearDiv(colorGlobal2)
    } else if (event.key === 'e'){
        //console.log('e')
        colorGlobal2 = 'brown'
        crearDiv(colorGlobal2)
    }

})

function crearDiv(color){
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style = "width:200px; height:200px; border:solid 2px;"
    nuevoDiv.style.backgroundColor = color
    document.body.appendChild(nuevoDiv)
}