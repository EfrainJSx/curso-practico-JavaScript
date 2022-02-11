/*    _>

console.group("Cuadrado"); //agrupar mensajes
// codigo del cuadrado

const ladoCuadrado = 5;
console.log("Los lados de mi cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimétro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadro mide: " + areaCuadrado + " cm2");

console.groupEnd(); // cerrar el agrupamiento

// codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden"
    +" \nlado 1: "
    + ladoTriangulo1 + " cm"
    +"\nlado 2: "
    + ladoTriangulo2 + " cm"
    +"\nbase: "
    +baseTriangulo + " cm"
    +"\naltura: "
    +alturaTriangulo + " cm"
    );

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perimétro del tringulo es: "+ perimetroTriangulo  + "cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triangulo es: " + areaTriangulo  + "cm2");
    console.groupEnd();


// circulo

console.group("Circulo");

const radio = 4;

console.log("El radio del circulo es: "+radio + "cm");

const diametroCirculo = radio * 2;
console.log("El diamétro del circulo es: "+ diametroCirculo + "cm");

const areaCirculo = radio * radio * Math.PI;
console.log("El área del circulo es: "+ areaCirculo + "cm2");

const perimetroCirculo = diametroCirculo * Math.PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

console.groupEnd();


_>      */
// _> cuadrado
console.group("Cuadrado");

function areaCuadrado (lado){
    return lado * lado;
}

function perimetroCuadrado(lado){
    return lado * 4;
}
console.groupEnd();

// _> triangulo
console.group("Triangulo");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

console.groupEnd();

// _> circulo
console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
}

function areaCirculo(radio){
    return radio * radio * Math.PI;
}

function perimetroCirculo(radio){
    var perimetro = diametroCirculo(radio) * Math.PI;
    return perimetro;
}

console.groupEnd();

// _> A partir de aqui vamos a interactuar con el HTML

/* En consola del navegador
    document.getElementById("NOMBRE_ID")
*/
// _> cuadrado
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimétro del cuadrado es: " + perimetro);
}
// _> triangulo
function calculaAreaTriangulo(){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const area = areaTriangulo(base,altura);
    alert("El área del tu triangulo es: "+area);
}

function calculaPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("ladoUno").value);
    const lado2 = Number(document.getElementById("ladoDos").value);
    const base = Number(document.getElementById("base").value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert("El perimétro del triangulo es: "+perimetro);
}

// _> circulo

function calculaDiametroCirculo(){
    const radio = Number(document.getElementById("radio").value);
    const diametro = diametroCirculo(radio);
    alert("El diamétro es: "+diametro);
}

function calculaAreaCirculo(){
    const radio = Number(document.getElementById("radio").value);
    const area = areaCirculo(radio);
    alert("El diamétro es: "+area);
}

function calculaPerimetroCirculo(){
    const radio = Number(document.getElementById("radio").value);
    const perimetro = perimetroCirculo(radio);
    alert("El diamétro es: "+perimetro);
}