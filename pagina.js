/*Selector Individual: get elementById("")
1° Paso: seleccionamos mediante el método y luego guardamos en una variable
*/
/*2° Paso: Mencionar a la variable y luego asignar un nuevo valor al elemento; 
utilizando innerHTML*/
var botonPulsado1 = document.getElementById("funcionEscribir")

var seleccionParrafo2 = document.getElementById("parrafo2")

var arregloSort = ["Sofia", "Mateo", "Valentina", "Diego", "Camila"]

var seleccionParrafo3 = document.getElementById("parrafo3")

var arreglosNombres = ["Lucas", "Isabella", "Alejandro", "Gabriela", "Samuel"]

var listado = arreglosNombres.map(arreglosNombres => ("5°4°: " + arreglosNombres))


var seleccionParrafo4 = document.getElementById("parrafo4")

var seleccionParrafo5 = document.getElementById("parrafo5")

seleccionParrafo2.innerHTML=`${arregloSort.join(" - ")}`

function funcionSort(){
    seleccionParrafo3.innerHTML=`${arregloSort.sort().join(" - ")}`
}

function funcionMap(){
    seleccionParrafo5.innerHTML=`${listado.join(" - ")}`
}

seleccionParrafo4.innerHTML=`${arreglosNombres.join(" - ")}`