/*const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento 
})
--------------------------------------------------------------------------------
function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

//Constructores

function onClickButtonOnPriceDiscount(){
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;

    const precioConDescuento = calcularPrecioConDescuento(price,discount);
    
    const result = document.getElementById("resultPrice");
    result.innerText = "El precio con descuento son: $" + precioConDescuento;

}
*/

var cupones = [
    { 
        name: "oro",
        discount: 30
     },
     {
        name: "plata",
        discount: 20
     },
     {
        name: "bronce",
        discount: 10
     },
     {
        name: "diamante",
        discount: 80
     }
]

function calculaDescuentoCupon(precio, cupon){

    const porcentajePrecioConDescuento = 100 - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}


// constructor

function onClickButtonOnPriceDiscount(){

    const coupon = document.getElementById("cupon").value;
    const precioReal = document.getElementById("price").value;

    var encuentraCupon = cupones.find(function(cupon){ // busca cupon
        return cupon.name === coupon;
    });
    
    const resultado = document.getElementById("resultPrice");

    if (!encuentraCupon) { // si no existe
    resultado.innerText = "Cupón invalido";
    }else{ // si existe
 
    const descuento = encuentraCupon.discount;

    const total = calculaDescuentoCupon(precioReal,descuento);

    resultado.innerText = "El precio a pagar es de: $" + total;
    }   
}

