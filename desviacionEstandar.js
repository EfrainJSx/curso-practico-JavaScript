// Utils

function calcularMediaAritmetica(lista){
        var acumulador = 0;
        for (let i = 0; i < lista.length; i++) {
            acumulador = Number(acumulador) + Number(lista[i]);
        }
        return acumulador / lista.length;
}

// calculo de desviación estándar
//_> arrar de salarios

const array = [];

function agregarValorArray(valor){
    array.push(valor);
}

//_> Calcula desviación estándar
function calculaDesviacionEstandar(lista){
    const promedio = calcularMediaAritmetica(lista);

    var acumulado = 0;
    for (let i = 0; i < lista.length; i++) {
        const resta = lista[i] - promedio;
        const restaCuadrada = resta * resta;
        acumulado = acumulado + restaCuadrada;

    }

    const varianza = acumulado / (lista.length - 1);
    
    return Math.sqrt(varianza);
}


// constructores

function agregarValor(){
    const valor = document.getElementById("valor").value;
    agregarValorArray(valor);

    const muestraLista = document.getElementById("mostrarLista");
    muestraLista.innerText = array;
}

function onclickCalcularDesviacionEstandar(){
    const desviacionEstandar = document.getElementById("muestrsDesviacionEstandar");
    desviacionEstandar.innerText = "La desviación estandar es: " + calculaDesviacionEstandar(array);

}