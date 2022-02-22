const list = [];

function agregarValorLista(numero){ 
    list.push(numero);
    return list;
}

function ordenaLista(a,b){
    return a - b;
}

function mediaGeometrica(list) {
    var acumulado = 1;
    for (let i = 0; i < list.length; i++) {
        acumulado = acumulado * list[i];
    }
    const medianaGeometrica = Math.pow(acumulado, 1 / list.length);
    return medianaGeometrica;    
}

// Constructor

function agregarValor(){
    const valor = document.getElementById("valor").value;
    agregarValorLista(valor);

    const mostrarLista = document.getElementById("mostrarLista");
    mostrarLista.innerText = list.sort(ordenaLista);
}

function onclickCalcularModaGeometrica (){
    const valorMediaGeometrica = mediaGeometrica(list);
    console.log(valorMediaGeometrica);
    const mg = document.getElementById("muestraMediaGeometrica");
    mg.innerText = "La media geometrica es: "+valorMediaGeometrica;
}