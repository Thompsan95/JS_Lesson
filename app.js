

//funciones y las palabras reservadas de javascript
/* A partir de la programacion orientada a objetos ya no se utiliza
procedimientos y en lugar se incorporan las funciones, las funciones
devuelven o no valores, depende de */
function bienvenido(){
    return 'bienvenido a la seccion de funciones'
}
/*cuando se crea una funcion debemos invocarla para que se muestre
se ejecuta de la siguiente forma
bienvenido();*/
//o de esta otra forma , que se almacena en una variable

var mensaje = bienvenido();
    console.log(mensaje);
    
//partes de una funcion

/*1) entreda, argumento (parametros)
2) codigo
3)salida(return)


//ejemplo

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;*/

/*de esta forma le enviamos valores a evaluar a nuestra funcion
var num = 3; 
var valor = cuadradoNumero (numero);
console.log(valor);
console.log(cuadradoNumero(5));*/

/*Funcion qur convierte de grados fahrenheit a celsius
3f = 0c, 68F = 20C
C= (F - 32) * 5/9

function convertirFaHaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 /9;
    return celsius;
}

var tempUno = convertirFaHaCelsius(32);
var tempDos = convertirFaHaCelsius(68);

console.log(tempUno);
console.log(tempDos);


function calcularEdad (yearNacimiento){
    return 2020 - yearNacimiento;
}    
*/
//en la variable se ingresa el año a calcular y nuestra funcion
//va a restar esa año con el año actual y esto nos dara la edad
/*var edad = calcularEdad(1990);
console.log(edad);
*/
/*
*Ejercicio de codificacion 3

calcular cuantos años le falta a una persona para que se jubile.
una persona aw jubila a los 65 años de nacimientos y su nombre

solucion*/
/*
function calcularTiempoJubilacion(yearNacimiento, nombre){
    var edad = calcularEdad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log(nombre + ' le falta ' + yearJubilacion + ' años para su jubilacion.');

}



calcularTiempoJubilacion(1990, 'Pablo');
calcularTiempoJubilacion(2005, 'Julio')
*/


/*Argumentos Undefined
var nombre;

var prueba = function(n){
    return'Hola ' + n;
}
/*esto siguiente se presenta como una variable indefinida en nuestra consola
esto se debe a que la variable nombre se declara mas no se le asigna un valor
 al nuestra funcion recibir el argumento nombre en n no nos retorna nigun valor
ya que este no esta definido
console.log(prueba(nombre));*/


/*Argumentos nulos 

var a;
//a diferencia del valor undefine, el valor nulo si se guarda en memoria
//sin embargo no representa valor alguno ya que este valor es nulo
a = null;

var valorNulo = function(a){
    return a;
}

console.log(valorNulo(a))
*/

/*Argumentos con valores por defecto

var sumar = function(a,b,c = 3/*este 3 se aplica como un valor por defecto para la funcion en el valor de tres*/ 
 /*   //a esta funcion que posee 3 argumentos se le denomina 'funcion de multiples argumentos'
    return a + b + c;
}
//el valor por default se utiliza cuando no se le asignen parametros a los argumentos de la funcion
console.log(sumar(10, 4, 7));
*/
/*
//plantillas de cadenas (temnplate string)

//esta funcion lo qe hace es concatenar partes de una acadena
//con una funcion que nosotros vamos a especificar
 var nombre = 'Pablo';
//concatenacion normal
// console.log('El nombre es: ' + nombre)
// concatenacion usando template string y comillas invertidas 'alt gr + }'
 console.log(`El nombre es: ${nombre}`);

 //tambien podemos realizar operaciones

 var a = 5;
 var b = 10;
// concatenacion normal
 //console.log('La suma es: ' + (a + b));
 
 // concatenacion con template string

console.log(`La sume es: ${a + b}`);
*/

/* Ejercicio 4
Implementar una funcion que nos permita evaluar el 
procentaje de respuestas positivas y negativas de un examen
la funcion debe recibir el nombre, y la cantidad de respuestas
positivas y negativas

la funcion debe calcular el porcentaje que representa cada tipo 
de respuesta, en una base de 100 preguntas.

De las respuestas posutuvas se define el score de la persona en 
A(>90%), B(70% - 89% ), C(45% - 69%), D(>45%)
*/

var calcularScore = function (nombre, pos, neg){
    var porPos = (pos / 100 * 100);
    var porNeg = (neg / 100 * 100);
    var score = '';

    if(porPos > 90){
        score = 'A';
    }else if(porPos >= 70){
        score = 'B';
    }else if(porPos >= 45){
        score = 'C';
    }else{
        score = 'D';
    }
    return`${nombre} tiene el score ${score}, Positivas: ${porPos}%, Negativas: ${porNeg}%`;
}

var resultado = calcularScore('Pablo', 75, 25);
console.log(resultado); 


