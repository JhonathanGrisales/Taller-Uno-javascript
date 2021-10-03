
//EJERCICIO 1

var nombre = prompt('Ingrese un nombre')
console.log('Ahora estás en la Matrix, ' + nombre)

//EJERCICIO 2 

var numero_decial = parseFloat(prompt('Ingrese un numero con decimales'))
var numero_entero = parseInt(prompt('ingrese un numero entero'))
var suma = numero_decial + numero_entero
console.log('El resultado de la suma es ' + suma)

//EJERCICIO 3

var numeroUno = parseFloat(prompt('Ingrese un numero'))
var numeroDos = parseFloat(prompt('Ingrese otro numero'))
var sumaDos = numeroUno + numeroDos
console.log('Suma = ' + sumaDos)
var numeroTres = parseInt(prompt('Ingrese un nuevo numero'))
var multiplicacion = sumaDos * numeroTres
console.log('Multiplicación de la suma por el ultimo numero es: ' + multiplicacion)

//EJERCICIO 4 

var kmRecorrido = parseFloat(prompt('Kilómetros recorridos:'))
var combustileGastado = parseFloat(prompt('Combustible gastado:'))
var consumo = kmRecorrido / combustileGastado
console.log('EL consumo por kilómetro es de ' + consumo)

//EJERCICIO 5 

var gradosF = parseFloat(prompt('Ingresá una temperatura expresada en Farenheit:'))
var celsius = (5 / 9) * (gradosF - 32)
console.log('La conversión a °C es  ' + celsius)

//EJERCICIO 6

var notaUno = parseFloat(prompt('Ingresé primer numero:'))
var notaDos = parseFloat(prompt('Ingresé segundo numero:'))
var notaTres = parseFloat(prompt('Ingresé tercer numero:'))
var promedio = (notaUno + notaDos + notaTres) / 3
console.log('El promedio de la nota es:  ' + promedio)

//EJERCICIO 7

var numero = parseFloat(prompt('Ingresé un numero:'))
numero = numero - ((numero * 15) / 100)
console.log('Descontando el 15% queda: ' + numero)

//EJERCICIO 8

var palabraUno = prompt('Ingrese una palabra')
var palabraDos = prompt('Ingrese otra palabra')
var concat = palabraUno + " " + palabraDos
console.log(concat)

//EJERCICIO 9

var texto = prompt('Ingrese un texto')
console.log('El cáracter en primer lugar es: ' + texto.charAt(0))
var pos = prompt('Ingrese un numero menor a : ' + --texto.length)
console.log('El caracter en la posición ' + pos + ' es ' + texto.charAt(pos))

//EJERCICIO 10

var shows = prompt('Ingrese el numero de Shows que ha visto el ultimo año: ')

if (shows <= 3) {
    false
} else {
    true
}

//EJERCICIO 11

var fecha = parseInt(prompt('Ingrese fecha en formato (DDMMAAAA)'))
var año = fecha % 10000
fecha = parseInt(fecha / 10000)
var mes = fecha % 100
fecha = parseInt(fecha / 100)
console.log(fecha + " / " + mes + " / " + año)

//EJERCICIO 12

var numeroEntero = parseInt(prompt('Ingrese un número entero'))

if (numeroEntero % 2 == 0) {
    true
} else {
    false
}

//EJERCICIO 13

var edad = parseInt(prompt('Ingrse su edad: '))
var articulosComprados = parseInt(prompt('Ingrese cantidad de articulos comprados: '))

if (edad > 18 && articulosComprados > 1) {
    true
} else {
    false
}

//EJERCICIO 14

var cadenaCaracteres = prompt('Ingrese una cadena de caracteres: ')
console.log('El texto tiene ' + cadenaCaracteres.length + ' caracteres ¿ ES PAR ?')

if (cadenaCaracteres.length % 2 == 0) {
    true
} else {
    false
}

//EJERCICIO 15

var unaPalabra = prompt('Ingrese una palabra')
var segundaPalabra = prompt('Ingrese otra palabra')

if (unaPalabra.length < segundaPalabra.length) {

    true

} else if (unaPalabra.length == segundaPalabra.length) {

    console.log('Son iguales')

} else {

    false
}


//EJERCICIO 16

var nombreUno = prompt('Ingrese un nombre')
var nombreDos = prompt('Ingrese otro nombre')

if (nombreUno.charAt(0) === nombreDos.charAt(0) ||
    nombreUno.charAt(nombreUno.length - 1) === nombreDos.charAt(nombreDos.length - 1)) {

    true
} else {
    false
}


//EJERCICIO 17

var absoluto = parseInt(prompt('Ingrese un numero'))

if (absoluto > 0) {

    console.log('El valor absoluto de ' + absoluto + ' es ' + absoluto)

} else {

    var conversionAbsoluto = absoluto * -1
    console.log('El valor absoluto de ' + absoluto + ' es ' + conversionAbsoluto)

}


//EJERCICIO 18

var n1 = parseInt(prompt('Ingrese un numero'))
var n2 = parseInt(prompt('Ingrese otro numero distinto al anterior'))

if (n1 > n2) {

    console.log('El numero mayor es  ' + n1)

} else if (n1 < n2) {

    console.log('El numero mayor es  ' + n2)

} else if (n1 == n2) {

    console.log('Los numero son iguales')
}

//EJERCICIO 19

var letra = prompt('Ingrese una letra')

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {

    console.log('La letra es vocal')

} else if (letra.length > 1) {

    console.log('No se puede procesar el dato')
} else {

    console.log('No es una vocal')
}

//EJERCICIO 20

var numUno = parseInt(prompt('Ingrese primer numero'))
var numDos = parseInt(prompt('Ingrese segundo numero'))
var numTres = parseInt(prompt('Ingrese tercer numero'))

var menor = numUno

if (menor > numDos && numDos < numTres) {

    menor = numDos
    console.log('El numero mayor es ' + menor)

} else if (menor > numTres && numTres < numDos ) {

    menor = numTres
    console.log('El numero mayor es ' + menor) 
    
} else{

    console.log('El numero menor es ' + menor) 

}
