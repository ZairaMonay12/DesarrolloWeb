//texto
var textoA = "Comillas dobles";
var textoB = 'Comillas simples';
var textoC = "texto con comillas 'simples' dentro de comillas dobles";

console.log(textoA);
console.log(textoB);
console.log(textoC);

var x = "2",
    y = "2.2";

document.write(x + y + "  " + typeof(x + y));
document.write('<br>');
document.write(x * y + "  " + typeof(x * y));


//numerico
var a = 10,
    b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //NOS DA EL RESIDUO DE LA DIVISION

console.log(1 + a++);
console.log(a);
console.log(1 + ++b);


//boolean
var t = true,
    f = false;

console.log(t && f); //falso
console.log(t || f); //verdadero
console.log(t == f); //falso
console.log(t != f); //verdadero

//listas
var nombre = "Zaira";
var lista = ["White", 30, nombre, true];
console.log(lista[1]);
console.log(lista.length);
console.log(lista[lista.length - 1]);

//objeto o tupla
var persona = {
    nombre: "Zaira",
    apellido: "Monay",
    aficiones: ["css", "html", "javascript"],
    inscrito: 1,
}
console.log(persona.nombre); //Zaira
console.log(persona.aficiones[1]); //html
console.log(persona.aficiones[persona.aficiones.length - 1]); //javascript