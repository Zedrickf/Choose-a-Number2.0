let numberSecret = 0;
let trynumber = 0;
let changeColor = 0;
let borderBlue = document.getElementById('changeBorder');
let listNumber = [];
let maxNumber = 10;

//funcion reutilizable para pasar texto por parametros a los elementos HTML
function asignTextElement(element, text) {
    let elementHTML = document.querySelector (element);
    elementHTML.innerHTML = text;
    
    return;
}

//funcion para hacer el numero random
function secretFunNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    
    console.log(generatedNumber);
    console.log(listNumber);
    do {
        if (listNumber.includes(generatedNumber)) {
            return secretFunNumber();
            
        } else {
            listNumber.push(generatedNumber);
            return generatedNumber;
        }
        
    } while (listNumber.length <= maxNumber); 

}

//funcion para llamar las condiciones iniciales
function initalConditions() {
    asignTextElement('h1','Secret number game');
    asignTextElement('p','Give me a number between 1 to 10');
    numberSecret = secretFunNumber();
    trynumber = 1;
    //regreso el color del border al azul inicial
    borderBlue.style.borderColor = '#1875E8';

    return;
}


//funcion para cambiar el color del borde en base a si acierta (verde) o no (rojo)
function changeBorderColor(colrs) {
    if (colrs == 1) {
        borderBlue.style.borderColor = '#00FF34';
    } else {
        borderBlue.style.borderColor = '#FF0202';
    }
 
    return;
}


//funcion de ejecutar el intento al presionar el boton azul
/*
con este codigo creo una funcion con su respectivo nombre y añado el codigo a ejecutar
dentro de las llaves
*/
function tryItButton() {
    
    let userTry = parseInt(document.getElementById('inputElement').value);
    
    //con el triple igual comparo las variables Y tipos de variables. Ambas deben ser iguales.
    if (userTry === numberSecret) {
        //aqui se usa el operado ternario para evaluar si se usa la palabra time o times. es un if else de una linea
        asignTextElement('p',`Great!! You got it right. Your number of tries was ${trynumber} ${(trynumber ===1) ? 'time' : 'times'}`);
        //accedo al DOM, busco el elemento por id y remuevo un atributo, el disable
        document.getElementById('reset').removeAttribute('disabled');
        changeColor = changeBorderColor(1);
    } else {
        if ( userTry > numberSecret ) {
            asignTextElement('p','The secret number is less');
        } else{
            asignTextElement('p','The secret number is bigger');
        }
        trynumber ++;
        cleanBox();
        changeColor = changeBorderColor(2);
    }

    return;
}

//funcion para reiniciar el juego
function resetGame() {
    cleanBox();
    initalConditions();
    //seleciono un id del HTML y le agrego el atributo disabled con el valor true
    document.getElementById('reset').setAttribute('disabled', 'true');
    return;
}


//funcion para limpiar el input field
function cleanBox() {

    document.querySelector('#inputElement').value = '';

    /*
    ambos codigos hacen lo mismo, solo seria otra forma de hacerlo
    de esta forma uso el selector generico (queryselector) para llamar a un id usando el numeral (almuadilla)
    let valueBox = document.querySelector('#inputElement');
    con esto le asigno al valor (value) de la variable valueBox el valor vacio ('')
    valueBox.value = '';
    */
    return;
}


//llamo a la funcion para pasar los parametros a usar en la misma funcion
asignTextElement('button','Give it a try!');
initalConditions();





/*
Con esto puedo seleccionar un elemento que esta en el HTML.
Dentro del parentesis puedo o bien colocar el atributo o el selector de clase
Asigno el elemento seleccionado a una variable para aplicar propiedades de JS

let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Secret number game';//Con esto para imprimir en pantalla

let parrafo = document.getElementByClass ('texto__parrafo');//Aqui selecciono con el selector de clase
parrafo.innerHTML = 'Give me a number between 1 to 10';
*/

