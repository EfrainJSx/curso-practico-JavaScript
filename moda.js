/*const lista1 = [
    1,1,2,3,4,5,3,1,2,3,4,4,3,5,2,1,2,3
];
//  1: 4
//  2: 4
//  3: 5
//  4: 3
//  5: 2

const lista1Count = {};

lista1.map(
    function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else{
        lista1Count[elemento] = 1;
        }   
    }
);

const listaArray = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listaArray[listaArray.length -1];

console.log(moda[0]+" con "+moda[1]+" repeticiones")
*/

const lista = [];
const listaCount = {};

function agregarValorLista(numero){
    lista.push(numero);
}

function ordenarLista(a,b){
    return a - b;
}

function contadorNumeros(lista){
    lista.map(
        function(elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] +=1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    return listaCount;
    
}

function ordenarPorAparicion(listaContador){
    const listaArrays = Object.entries(listaContador).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    return listaArrays;
}

function mostrarModa(listaArray) {
    console.log(listaArray);
    const moda = listaArray[listaArray.length - 1];

    return moda;
}

// constructor

function agregarValor(){
    const valor = document.getElementById("valor").value;
    agregarValorLista(valor);

    const muestraLista = document.getElementById("mostrarLista");
    muestraLista.innerText = "El valor de la lista es: \n" + lista.sort(ordenarLista);
}

function onclickCalcularModa(){
    const numerosContados = contadorNumeros(lista);
    console.log(numerosContados);
    const numerosOrdenados = ordenarPorAparicion(numerosContados);
    console.log(numerosOrdenados);
    const obtenerObjetoModa = mostrarModa(numerosOrdenados);
    const muestraModa = "El valor "+obtenerObjetoModa[0]
                        +" es la moda con "+obtenerObjetoModa[1]
                        +" repeticiones";

    const moda = document.getElementById("muestrsModa");
    moda.innerText = muestraModa;
}