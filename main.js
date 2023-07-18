//Asesoria Online 1.2

let confirmarModelo = true
let confirmarMedida = true
let addCarrito = true
let productoEncontrado
let agregarProducto = true
let totalProductos = 0 
let precioTotalProductos = 0
let confirmarMetodoPago

function AgregarACarro(confirmar, encontrado) { // hace push al array carroCompras
    if (confirmar){
        carroCompras.push(encontrado)
        console.log(carroCompras)
        }
    return confirmar
}

function carrito(){ //Funcion principal que simula agregar productos a un carrito de compras
do {
    
    const medida = prompt("Ingrese medida deseada:\n- Escriba 190x80\n- Escriba 190x140") //ingresar medida
    /* console.log(medida) para validacion */
    if(medida.toUpperCase() === "190X80" || medida.toUpperCase() === "190X140"){
    const modelo = prompt("Ingrese el nombre del modelo para ver sus caracteristicas:\n- Tropical\n- Princess\n- Exclusive") //Ingresar prompt con nombre del modelo


let encontrado = productos.find((producto) => producto.nombre.toUpperCase() == modelo.toUpperCase() && producto.medida.toUpperCase() == medida.toUpperCase()) 
//compara variables dentro del array con el prompt ingresado

//encontrar nombre de producto

switch (modelo.toUpperCase()) {
    case "TROPICAL":
        console.log(encontrado)
        alert("- Modelo: "+encontrado.nombre+"\n- Medida: "+encontrado.medida+"\n- Tecnologia: "+encontrado.tecnologia+"\n- Densidad: "+encontrado.densidad+"\n- Peso soportado: "+encontrado.peso+"Kg.\n- Precio de lista: $"+encontrado.precio)
        confirmarModelo = confirm("Es el modelo de su interes?")
        AgregarACarro(confirmarModelo,encontrado)

        break;
    case "PRINCESS":
        alert("- Modelo: "+encontrado.nombre+"\n- Medida: "+encontrado.medida+"\n- Tecnologia: "+encontrado.tecnologia+"\n- Densidad: "+encontrado.densidad+"\n- Peso soportado: "+encontrado.peso+"Kg.\n- Precio de lista: $"+encontrado.precio)
        console.log(encontrado)
        confirmarModelo = confirm("Es el modelo de su interes?")
        AgregarACarro(confirmarModelo,encontrado)
        break;
    case "EXCLUSIVE":
        alert("- Modelo: "+encontrado.nombre+"\n- Medida: "+encontrado.medida+"\n- Tecnologia: "+encontrado.tecnologia+"\n- Densidad: "+encontrado.densidad+"\n- Peso soportado: "+encontrado.peso+"Kg.\n- Precio de lista: $"+encontrado.precio)
        console.log(encontrado)
        confirmarModelo = confirm("Es el modelo de su interes?")
        AgregarACarro(confirmarModelo,encontrado)
        break;

    default:
        alert("Por favor ingrese un modelo de los disponibles")
        confirmarModelo = false
        break;
}
} else {
    alert("Medida erronea, vuelva a intentar")
    confirmarModelo = false    
}


} while (!confirmarModelo)


} 


function sumaProductosCarrito() { // suma de precios de lista del total de productos
    carroCompras.forEach(function(precios)  {
        console.log(precios.precio)
        precioTotalProductos += precios.precio
    })
}


function metodoPago(precio) { //Calcula precio final segun forma de pago elegida
    let precio1 = precio
    do {
    precio = precio1 
    const metodoPago = prompt("Seleccione metodo de pago:\n- Escriba 1 para efectivo y 50%off\n- Escriba 2 para plan 6 cuotas y 40%off\n- Escriba 3 para plan 12 cuotas y 30%off")
    
    let cuotas = 0
    switch (metodoPago) {
        case "1":
                precio = (precio * 0.5) * 1.21
                confirmarMetodoPago = confirm("Selecciono precio en efectivo a pagar un total de: $"+precio+" con iva ya incluido.\nDesea pagar en efectivo?")
                break
        case "2":
                precio = (precio * 0.6) * 1.21
                cuotas = Math.round(precio / 6)
                confirmarMetodoPago = confirm("Selecciono precio en plan 6 cuotas a pagar un total de: $"+precio+" con iva ya incluido. y 6 cuotas de: $"+cuotas+"\nDesea pagar en 6 cuotas?")
                break
        case "3":
                precio = (precio * 0.7) * 1.21
                cuotas = Math.round(precio / 12)
                confirmarMetodoPago = confirm("Selecciono precio en plan 12 a pagar un total de: $"+precio+" con iva ya incluido. y 12 cuotas de: $"+cuotas+"\nDesea pagar en 12 cuotas?")
                break
        default:
            confirmarMetodoPago = false
            break;
    }
    }while(!confirmarMetodoPago)
}


do{
carrito()
addCarrito = confirm("Quiere agregar al carrito?") // falta hacer array carrito
agregarProducto = confirm ("Quiere agregar otro producto?")

}while (agregarProducto)

// console.log(carroCompras)
// console.log(carroCompras.length) // especifica cantidad de productos
totalProductos = carroCompras.length
sumaProductosCarrito()
// console.log(precioTotalProductos) // muestra precio total obtenida en funcion sumaProductosCarrito

// recorro el array para mostrar productos que selecciono
const listaProductos = carroCompras.map((producto) => {
    return `\n- Producto: ${producto.nombre}\n- Precio: $${producto.precio}`;
  })


alert("Usted va a comprar "+totalProductos+" producto/s\n- Que son: "+listaProductos+"\n- Por un precio total de lista de: $"+precioTotalProductos)

metodoPago(precioTotalProductos)

alert("Gracias por comprar con nosotros")