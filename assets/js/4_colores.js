let div1 = document.getElementById('div_1')
let div2 = document.getElementById('div_2')
let div3 = document.getElementById('div_3')
let div4 = document.getElementById('div_4')

div1.addEventListener("click", () => cambiarColor ('div_1'))
div2.addEventListener("click", () => cambiarColor ('div_2'))
div3.addEventListener("click", () => cambiarColor ('div_3'))
div4.addEventListener("click", () => cambiarColor ('div_4'))

function cambiarColor (elementoID , color = 'black'){
    let elemento = document.getElementById(elementoID);
        elemento.style.backgroundColor = color;
    }