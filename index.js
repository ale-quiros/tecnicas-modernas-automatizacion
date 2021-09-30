//-------------EJERCICO #1:  UNIQ-C UNIX-------------------------

let uniqCElements = [1,1,1,2,5,5,5,6,7,8,9,9,1,10];
console.log("Ejercicio#1 uniq C:  \n");
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


//-------------EJERCICO #2  METODO APLANAR-------------------------

console.log("Ejercicio#2 Aplanar:  \n");
console.log (     flatten ('a', ['b', 2], 3, null, [[4], ['c']])     );
console.log("\n-------------------------------");

function flatten(...elements) {
    let results = [];
    for(let index=0; index < elements.length; index++){
        if (elements[index] === null){
           elements[index] = 'null';
        }
        results.push(elements[index]);
    }
    return results.join();
}


//-------------EJERCICO #3  ENCONTRAR PALABRA META-------------------------

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

//-------------EJERCICO #4 ELEVAR TODOS AL CUADRADO-------------------------

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
    return results.join('');
}
