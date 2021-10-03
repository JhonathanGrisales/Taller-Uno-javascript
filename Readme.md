# Trabajo javascript 
_20 Ejercicios utilizando el javascript_


### EJERCICIO 1

```js
var nombre = prompt('Ingrese un nombre')
console.log('Ahora estás en la Matrix, ' + nombre)
```

![Alt text](./img/1.jpg?raw=true "Title")

### EJERCICIO 2

```js
var numero_decial = parseFloat(prompt('Ingrese un numero con decimales'))
var numero_entero = parseInt(prompt('ingrese un numero entero'))
var suma = numero_decial + numero_entero
console.log('El resultado de la suma es ' + suma)
```

![Alt text](./img/2.jpg?raw=true "Title")

### EJERCICIO 3

```js
var numeroUno = parseFloat(prompt('Ingrese un numero'))
var numeroDos = parseFloat(prompt('Ingrese otro numero'))
var sumaDos = numeroUno + numeroDos
console.log('Suma = ' + sumaDos)
var numeroTres = parseInt(prompt('Ingrese un nuevo numero'))
var multiplicacion = sumaDos * numeroTres
console.log('Multiplicación de la suma por el ultimo numero es: ' + multiplicacion)
```

![Alt text](./img/3.jpg?raw=true "Title")

### EJERCICIO 4 

```js
var kmRecorrido = parseFloat(prompt('Kilómetros recorridos:'))
var combustileGastado = parseFloat(prompt('Combustible gastado:'))
var consumo = kmRecorrido / combustileGastado
console.log('EL consumo por kilómetro es de ' + consumo)
```

![Alt text](./img/4.jpg?raw=true "Title")

### EJERCICIO 5 

```js
var gradosF = parseFloat(prompt('Ingresá una temperatura expresada en Farenheit:'))
var celsius = (5 / 9) * (gradosF - 32)
console.log('La conversión a °C es  ' + celsius)
```
![Alt text](./img/5.jpg?raw=true "Title")


### EJERCICIO 6 

```js
var notaUno = parseFloat(prompt('Ingresé primer numero:'))
var notaDos = parseFloat(prompt('Ingresé segundo numero:'))
var notaTres = parseFloat(prompt('Ingresé tercer numero:'))
var promedio = (notaUno + notaDos + notaTres) / 3
console.log('El promedio de la nota es:  ' + promedio)
```

![Alt text](./img/6.jpg?raw=true "Title")

### EJERCICIO 7 

```js
var numero = parseFloat(prompt('Ingresé un numero:'))
numero = numero - ((numero * 15) / 100)
console.log('Descontando el 15% queda: ' + numero)
```

![Alt text](./img/7.jpg?raw=true "Title")

### EJERCICIO 8 

```js
var palabraUno = prompt('Ingrese una palabra')
var palabraDos = prompt('Ingrese otra palabra')
var concat = palabraUno + " " + palabraDos
console.log(concat)
```

![Alt text](./img/8.jpg?raw=true "Title")

### EJERCICIO 9 

```js
var texto = prompt('Ingrese un texto')
console.log('El cáracter en primer lugar es: ' + texto.charAt(0))
var pos = prompt('Ingrese un numero menor a : ' + --texto.length)
console.log('El caracter en la posición ' + pos + ' es ' + texto.charAt(pos))
```

![Alt text](./img/9.jpg?raw=true "Title")

### EJERCICIO 10

```js
var shows = prompt('Ingrese el numero de Shows que ha visto el ultimo año: ')

if (shows <= 3) {
    false
} else {
    true
}
```

![Alt text](./img/10.jpg?raw=true "Title")

### EJERCICIO 11

```js
var fecha = parseInt(prompt('Ingrese fecha en formato (DDMMAAAA)'))
var año = fecha % 10000
fecha = parseInt(fecha / 10000)
var mes = fecha % 100
fecha = parseInt(fecha / 100)
console.log(fecha + " / " + mes + " / " + año)
```

![Alt text](./img/11.jpg?raw=true "Title")


### EJERCICIO 12

```js
var numeroEntero = parseInt(prompt('Ingrese un número entero'))

if (numeroEntero % 2 == 0) {
    true
} else {
    false
}
```
![Alt text](./img/12.jpg?raw=true "Title")

### EJERCICIO 13

```js
var edad = parseInt(prompt('Ingrse su edad: '))
var articulosComprados = parseInt(prompt('Ingrese cantidad de articulos comprados: '))

if (edad > 18 && articulosComprados > 1) {
    true
} else {
    false
}
```
![Alt text](./img/13.jpg?raw=true "Title")

### EJERCICIO 14

```js
var cadenaCaracteres = prompt('Ingrese una cadena de caracteres: ')
console.log('El texto tiene ' + cadenaCaracteres.length + ' caracteres ¿ ES PAR ?')

if (cadenaCaracteres.length % 2 == 0) {
    true
} else {
    false
}
```
![Alt text](./img/14.jpg?raw=true "Title")


### EJERCICIO 15


```js
var unaPalabra = prompt('Ingrese una palabra')
var segundaPalabra = prompt('Ingrese otra palabra')

if (unaPalabra.length < segundaPalabra.length) {

    true

} else if (unaPalabra.length == segundaPalabra.length) {

    console.log('Son iguales')

} else {

    false
}
```

![Alt text](./img/15.jpg?raw=true "Title")


### EJERCICIO 16

```js
var nombreUno = prompt('Ingrese un nombre')
var nombreDos = prompt('Ingrese otro nombre')

if (nombreUno.charAt(0) === nombreDos.charAt(0) ||
    nombreUno.charAt(nombreUno.length - 1) === nombreDos.charAt(nombreDos.length - 1)) {

    true

} else {

    false
}
```

![Alt text](./img/16.jpg?raw=true "Title")


### EJERCICIO 17

```js
var absoluto = parseInt(prompt('Ingrese un numero'))

if (absoluto > 0) {

    console.log('El valor absoluto de ' + absoluto + ' es ' + absoluto)

} else {

    var conversionAbsoluto = absoluto * -1
    console.log('El valor absoluto de ' + absoluto + ' es ' + conversionAbsoluto)

}
```

![Alt text](./img/17.jpg?raw=true "Title")


### EJERCICIO 18


```js
var n1 = parseInt(prompt('Ingrese un numero'))
var n2 = parseInt(prompt('Ingrese otro numero distinto al anterior'))

if (n1 > n2) {

    console.log('El numero mayor es  ' + n1)

} else if (n1 < n2) {

    console.log('El numero mayor es  ' + n2)

} else if (n1 == n2) {

    console.log('Los numero son iguales')
}
```

![Alt text](./img/18.jpg?raw=true "Title")


### EJERCICIO 19

```js
var letra = prompt('Ingrese una letra')

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {

    console.log('La letra es vocal')

} else if (letra.length > 1) {

    console.log('No se puede procesar el dato')
} else {

    console.log('No es una vocal')
}
```

![Alt text](./img/19.jpg?raw=true "Title")

### EJERCICIO 20

```js
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
```
![Alt text](./img/20.jpg?raw=true "Title")