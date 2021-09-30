/*
//FOR EACH---------------------------------------------------
let arreglo = [2,4,6,8,10,12]

for (let i=0; i< arreglo.length; i++){
    const item = arreglo[i];
    const index = i;

    console.log(item, index);
}

arreglo.forEach(function (item, index){
    console.log(item, index);
});


arreglo.forEach((item, index) => {
    console.log(item, index);
});

//MAP------------------------------------------------------

let arr = ['juan', 'marcos', 'lena', 'sergio'];
let result =[];

for (let index=0; index < arr.length; index++){
    const item = arr[index];
    result.push(item);
}

result = arr.map ((item, index) => {
return item;
});

console.log(result);


let newArray  = uniqueCElements.map(function(item, index, elements) {
    let results = [];
    if (elements[index] === elements[index+1]){
        results.push(item, 2);
    }
    else{
        results.push (item,1);
    }
    return results
  });
*/

//FILTER --------------------------------------------------
/*
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let result =[];

for (let index=0; index < arr.length; index++){
    const item = arr[index];
    
    if (item >= 5 && item <= 11){
        result.push(item);
    }
}

let result2 = arr.filter (function (item){
    return item >= 5 && item <=11;
});

let result2 = arr.filter ((item) =>  item >= 5 && item <= 11);

console.log(result2);

*/

//FIND----------------------------------------------------
/*
let arr =[
    {
        city: 'California',
        budget: 5000
    },
    {
        city: 'NY',
        budget: 8000
    },
    {
        city: 'Orlando',
        budget: 2000
    }
];

let result ={};

for (let index=0; index < arr.length; index++){
    const item = arr[index];
    
    if (item.budget < 8000){
        result = item;
        break;
    }
}

result = arr.find (function (item){
return item.budget < 8000;
});


result = arr.find ((item) =>  item.budget < 8000 );

console.log(result);


//INDEXOF
result = arr.findIndex ((item) =>  item.budget < 3000 );

console.log(result);

*/

//REDUCE-------------------------------------------------

/*let arr = [2,4,6,8,10,12,14,16,18];

let result = 0;

for (let index=0; index < arr.length; index++){
    result += arr[index]; 
}

result = arr.reduce ((prev, item) => prev += item );

console.log(result);


let arr = [18,2,45,6,-23,89,1,10,22,66,78];
/*let result = Number.MIN_VALUE;

for (let index=0; index < arr.length; index++){
    const item = arr[index];
    result = Math.max (result, item);
}


let result = arr.reduce ((prev, item) => {
    return Math.min (prev, item);
}, Number.MAX_VALUE);

console.log(result);
*/

