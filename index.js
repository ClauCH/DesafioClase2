
/* Muestra el mensajes solo para notas mayores o iguales a 4*/
let nota = parseInt(prompt("Ingrese su nota:"));
while (nota >= 4) {
    alert("Bien aprobaste!");
    nota = 0;
}

/*Calcular promedio con FOR*/
let numero = 0;
let suma = 0;

for (let i = 0; i < 3; i++) {
    numero = parseInt(prompt("Ingresar nota para sacar el promedio:"));
    suma += numero;
}
let promedio;
promedio = suma / 3;

alert(` Tu promedio es:${promedio}`);


/*Bucle para ingresar notas hasta que se presiona calcelar*/
do {

    let nota = parseInt(prompt("Ingrese su nota:"));

    if (nota > 0 && nota <= 10) {
        if (nota < 4) {
            alert("No probaste");
        }
        else{
            alert("aprobaste");
        }
    }
}
while (nota != undefined);	
