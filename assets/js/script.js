/*function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/

//USO DE FUNCION ANONIMA PARA USO DE UNA UNICA VEZ


let ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar('yellow')
});

function pintar(color = 'green'){
    ele.style.backgroundColor = color
}
