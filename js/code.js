function calcular() {

    var a = parseInt(document.getElementById("num1").value)
    var b = a + 1
    document.getElementById("par").innerHTML = (a + " +" + "1" + "=" + b)
}

function primo() {
    var a = document.getElementById("num2").value

    if (a % 2) {
        document.getElementById("pr").innerHTML = ("no es par")
    } else {
        document.getElementById("pr").innerHTML = (" es par")
    }
}

function pizeria() {
    var a = document.getElementById("age").value

    if (a <= 10) {
        document.getElementById("premio").innerHTML = ("tu premio es un jugo")
    } else if (a >= 18) {
        document.getElementById("premio").innerHTML = ("tu premio es una cerveza")
    } else document.getElementById("premio").innerHTML = ("no recibes ningun premio")

    var b = document.getElementById("gen").value

    if (a != " " && b === "mujer") {
        document.getElementById("premio").innerHTML = ("tu premio es una pizza hawaiana")
    } else if (a != " " && b === "hombre") {
        document.getElementById("premio").innerHTML = ("tu premio es una pizza 3 carnes")
    }
}

function ValorAPagar() {

    var a = document.getElementById("listA").value
    switch (a) {
        case "piz1":
            console.log(8500);
            break
        case "pc1":
            console.log(5500);

            var b = document.getElementById("listB").value
            switch (b) {
                case "piz1":
                    console.log(8500);
                    break
                case "pc1":
                    console.log(5500);
            }


    }
}

function Resultado() {
    var x = document.getElementById("numero").value
    for (var a = 1; a <= 10; a++)
        document.getElementById("tdm").innerHTML = (x + a + (x * a)+"<br>");        
}

function informe() {
    var prom = document.getElementById("promedio").value
    var matricula = 1000000
    var nota = "Su descuento es del "
    if (prom <= 3) {
        console.log("no se hace descuento")
    } else if (prom > 3 && prom <= 4) {
        console.log(nota + parseInt(((matricula * 5) / 100) - matricula))
    } else if (prom > 4) {
        console.log(nota + parseInt(((matricula * 50) / 100) - matricula))
    }
}