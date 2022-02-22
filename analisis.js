// Helpers / utils
function esPar(numero){
    return (numero % 2 === 0) 
}

function calcularMediaAritmetica(lista){
console.log("lista "+lista);
    const sumaLista =  lista.reduce(
        function (valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];

        const mediana = calcularMediaAritmetica([persona1, persona2]);
        
        return mediana;
        
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general

const salariosMex = mexico.map(
    function (persona){
        return persona.salary;
    });


const salarioMexSort = salariosMex.sort(
    function(a,b){
        return a - b;
    }
);

const medianaGeneralMex = medianaSalarios(salarioMexSort);

// Mediana del top 10 %



const spliceStart = ((salarioMexSort.length * 90) / 100);
const spliceStartRound = parseInt(spliceStart);
const spliceCount = salarioMexSort.length - spliceStartRound;

const salariosMexTop10 = salarioMexSort.splice(spliceStartRound, spliceCount);
const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({medianaGeneralMex, medianaTop10Mex});
