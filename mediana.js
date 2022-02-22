/*
const lista1 = [
    32,
    32,
    43,
    46,
    43,
    65,
    65,
    3
];

const mitadLista = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista - 1];
    const elemento2 = lista1[mitadLista];

    mediana = (elemento1 + elemento2) / 2;


    
} else {
    mediana = lista1[mitadLista];
    
}

*/


var lista = [];

function agregarValorLista(numero){
    lista.push(numero);
}

function ordenarLista(a, b) {
    return a - b;
  }

  function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculaMediana(lista1){
    var mediana = 0;
    const mitadLista = parseInt(lista1.length / 2);

if (esPar(lista1.length)) {
    //console.log("la mitad de la lista es "+ mitadLista);
    const elemento1 = lista1[mitadLista - 1];
    //console.log("elemento 1 "+ elemento1);
    const elemento2 = lista1[mitadLista];
    //console.log("elemento 2 "+ elemento2);

    mediana = (Number(elemento1) + Number(elemento2)) / 2;
    //console.log("mediana "+ mediana);

} else {
    mediana = lista1[mitadLista];
    
}
    return mediana;
}
// constructor

function agregarValor(){
    const valor = document.getElementById("valor").value;
    agregarValorLista(valor);

    const muestraLista = document.getElementById("mostrarLista");
    muestraLista.innerText = "El valor de la lista es: \n" + lista.sort(ordenarLista);
}

function onclickCalcularMediana(){
   const valorMediana = calculaMediana(lista);
   const muestraMediana = document.getElementById("muestrsMediana");
   muestraMediana.innerText = "La mediana es: " + valorMediana;
   
}