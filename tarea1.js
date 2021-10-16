
/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
-------------EJERCICO #1:  UNIQ-C UNIX-------------------------

Feedback Profe: En el primer ejercicio lo hiciste bien, 
yo buscaría de qué manera mejorar la solución utilizando métodos del prototipo Array.  

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/
//-------Mi solucion anterior
let uniqCElements = ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'b', 'c'];
console.log("Ejercicio#1 Mi uniq C:  \n");
console.log(uniqC(uniqCElements));
console.log("\n-------------------------------");

function uniqC(elements){
    let results = [];

    for (let index=0; index < uniqCElements.length; index++){
        let tempArray = [];
        let times = 1;

        while (uniqCElements[index] === uniqCElements[index + 1]){
            ++times;
            ++index;
        }
        tempArray.push (uniqCElements[index], times);
        results.push (tempArray);
    }
    return results;
}

//---------Solucion mejorada dada en clase utilizando funciones de javascript
console.log("Ejercicio#1 uniq C Corregido:  \n");
console.log(uniqCCorreccionClase('a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'b', 'c'));
console.log("\n-------------------------------");

function uniqCCorreccionClase(...values) {
    return getSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
  }
  
  function getSubArrays(...values) {
    let start = 0;
    let end = 0;
    const subValues = [];
    for (let index = 0; index < values.length; index++) {
      if (values[index] === values[index + 1]) end++;
      else {
        subValues.push(values.slice(start, end + 1));
        start = end + 1;
        end = start;
      }
    }
    return subValues;
  }
  

/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
-------------EJERCICO #2  METODO APLANAR-------------------------

Feedback profe:  En el segundo ejercicio no te fue tan bien, porque si bien es cierto que parece ser que el array se aplana, 
en realidad lo que haces es convertirlo a string, y eso no es lo que queremos hacer, hay que aplanar y devolver un array igual

HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/


console.log("Ejercicio#2 Aplanar:  \n");
console.log (     flatten ([1, [2, 3], 4, 5, [6, [7, [8, [9, [10, [11, [12]]]]]]]])     );
console.log("\n-------------------------------");


function flatten(values) {
  return values.some(Array.isArray) ? flatten([...values.flat()]) : values;
}


/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
-------------EJERCICO #3  ENCONTRAR PALABRA META-------------------------

Feedback profe:  El tercer ejercicio también lo hiciste bien. Te dejo a tu criterio qué poder mejorar de acuerdo a lo visto en clase.

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/

console.log("Ejercicio#3 Encontrar palabra:  \n");

let fnElements = ['bow','crystal', 'bows','organic','ally','rain','line', 'rain'];
let fnGoalWord = "rainbow";

console.log ( findGoalWord (fnElements ,fnGoalWord ) );
console.log("\n-------------------------------");

function findGoalWord(words, goalWord ){
    let results = [];
    let found = false;

    for (let index=0; !found && index < words.length; index++){
        let word1 = words[index] ;
          
        for (let indexAux= 0; !found && indexAux < words.length ; indexAux++){
            let word2 = words[indexAux];

            if (word1 + word2 === goalWord || word2 + word1 === goalWord) {
                found = true;
                let tempArray = [];
                (word1 + word2 === goalWord) ?  tempArray.push (index, indexAux) : tempArray.push (indexAux, index);
                results.push (word1, word2, tempArray);
            }
        }
    } 
    if (!found)
        results = null;

    return results;
}

/*HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

-------------EJERCICO #4 ELEVAR TODOS AL CUADRADO-------------------------
Feedback Profe:  En el 4to ejercicio, también lo hiciste bien, pero igual, devuelves un string en lugar de un valor numérico. 

HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH*/

console.log("Ejercicio#4 cuadrados:  \n");
console.log (allsquare (999));
console.log("\n-------------------------------");

function allsquare(number){
    let results = [];
    if (Number.isInteger(number) && number >= 0){
        if (number == 0){ results.push (number);}
        
        while (number >= 1) {
            let digit = number % 10;
            results.unshift (Math.pow(digit, 2));
            number = Math.floor(number / 10);
        }
    }
    else {
        console.log ("El numero debe ser entero y positivo");
    }
    return  parseInt (results.join(''));
}
