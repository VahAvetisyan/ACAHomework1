/*01.  Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same. */


let number = prompt(`Enter number`);

function lastDigitToBegginning(num){
    let lastDigit = num % 10;
    if( lastDigit !== 0 && num > 9 ){
        return (`${lastDigit}${(num-lastDigit)/10}`);
    }
    return num;
}

let lastDigitBegginning = +(lastDigitToBegginning(number));


/*02.  Given three numbers. Sort them by the ascending order. */

let array = [45,- 26,78,5];

for (let i = 0; i < array.length; i++) { 
    for (let j = i + 1; j < array.length; j++) { 
        if (array[i] > array[j]) { 
            let num = array[i]; 
            array[i] = array[j]; 
            array[j] = num; 
        }
    } 
}


/*03.  Given the following code rewrite it using only two if operators. (Hint: use logical
operators). */

let n = +prompt();

let i = 0;
let j = 0;

if(n % 2 === 0 && !Math.floor(n / 10)){    
        i += 1;
}

if(n % 3 === 0 && n % 10 === 1){
        j += 1;
}

/*04.  Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
For the triangle entered numbers are height and and base. */

let geometricFigure = prompt('Please enter geometric figure (triangle or rectangle).');
let param1 = prompt(`Enter ${geometricFigure}'s height`);
let param2 = prompt(`Enter ${geometricFigure}'s base`);
let answer = '';


if(param1 > 0 && param2 > 0){
    let area;
    if(geometricFigure == 'triangle'){
        area = (param1 * param2)/2
        answer = `Square of the ${geometricFigure} is ${area}`;
    }else if(geometricFigure == 'rectangle'){
        area = param1 * param2;
        answer = `Square of the ${geometricFigure} is ${area}`;
    }
}else{
    answer = 'Please enter only positives';
}

console.log(answer);

/* 05.  Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given obj[i] create an array. */

let obj = { a: '1', b: '1', c: '1', d: '2' };
let newObj = {};
let arr = [];

for(let i in obj){
    for(let j in obj){
        if(obj[i] === obj[j]){
            arr.push(j)
        }else{
            newObj[obj[i]] = i
        }

        if(arr.length>1){
            newObj[obj[i]] = arr;
        }
        
    }
    arr = []
}