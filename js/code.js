function calcular() {

    var a = parseInt(document.getElementById("num1").value)
    var b = 0
    for (var x = 1; x <= a; x++) {
        b = x + b
        console.log(b)
    }

}

function primo() {
    var a = document.getElementById("num2").value

    if (a % 2) {
        document.getElementById("pr").innerHTML = (a + " es impar")
    } else {
        document.getElementById("pr").innerHTML = (a + " es par")
    }
}

function pizeria() {
    var a = document.getElementById("age").value

    if (a <= 10) {
        document.getElementById("premio").innerHTML = ("Felicitaciones tu premio es un jugo")
    } else if (a >= 18) {
        document.getElementById("premio").innerHTML = ("Felicitaciones tu premio es una cerveza")
    } else document.getElementById("premio").innerHTML = ("no recibes ningun premio por el momento")

    var b = document.getElementById("gen").value

    if (a != " " && b === "mujer") {
        document.getElementById("premio").innerHTML = ("Felicitaciones tu premio es una pizza hawaiana")
    } else if (a != " " && b === "hombre") {
        document.getElementById("premio").innerHTML = ("Felicitacions tu premio es una pizza 3 carnes")
    }
}

function ValorAPagar() {

    var precioActual = precioActual_2()
    var opcionMenu = document.getElementById("listA").value
    var precio = 0
    switch (opcionMenu) {
        case "piz1":
            precio = 8500
            break
        case "piz2":
            precio = 8500
            break
        case "piz3":
            precio = 8500
            break
        case "pc1":
            precio = 5500
            break
        case "pc2":
            precio = 7500
            break
        case "h1":
            precio = 7400
            break
        case "h2":
            precio = 8400
            break
        case "l1":
            precio = 10800
            break
        case "m1":
            precio = 11500
            break
        case "s1":
            precio = 7500
            break

    }
    if (precio != 0) {
        precioActual = parseInt(precio) + parseInt(precioActual)
    } else {
        precioActual = precio
    }

    document.getElementById('precioTotalCliente').value = precioActual
    document.getElementById('precioTotalCliente').innerHTML = precioActual
}
function precioActual_2() {
    return document.getElementById("precioTotalCliente").value

}

function division() {
    var div = document.getElementsByName("clientes").value
    var total = ValorAPagar()

    if (div == 1) {
        console.log(parseInt(total) / parseInt(1))
    } else if (div == 2) {
        console.log(parseInt(total) / parseInt(2))
    } else {
        console.log(parseInt(total) / parseInt(3))
    }
}


function Resultado() {
    var x = document.getElementById("numero").value
    for (var a = 1; a <= 10; a++)
        console.log(x + "X" + a + "=" + (x * a));
}

function informe() {
    var prom = document.getElementById("promedio").value
    var matricula = 1000000
    var nota = "Su descuento es de "
    if (prom <= 3) {
        document.getElementById("dto").innerHTML = ("no se hace descuento")
    } else if (prom > 3 && prom <= 4) {
        document.getElementById("dto").innerHTML = (nota + parseInt(((matricula * 95) / 100) - matricula))
    } else if (prom > 4) {
        document.getElementById("dto").innerHTML = (nota + parseInt(((matricula * 50) / 100) - matricula))
    }
}
