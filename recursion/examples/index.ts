function countTo(max: number, current: number, list?: number[]): void {
    if (current > max) return; 
    console.log("current: ", current)
    countTo(max, current + 1);
}

// countTo(10, 1, [])

function fibonacci(n: number): number {
    // base case
    if(n === 2 || n === 1) {
        return 1;
    } else if (n <= 0) {
        return 0; 
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

// Although it looks like a nicer code, sometimes recursive solutions can be written like iterative
// console.log('fibonacci(12) :>> ', fibonacci(14));

function fib(n: number): number {
    let sequence = [0, 1]
    for(let i = 2; i < n + 1; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence[n]
}

// console.log('fib(20) :>> ', fib(14));

// Factorials 
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
*/

function factorial (num: number): number {
    if (num < 2) return 1; 
    return num * factorial(num - 1)
}

// console.log('factorial(5) :>> ', factorial(5));

/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedArrays(array: number[]): number {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (Array.isArray(current)) {
            sum += nestedArrays(current)
        } else {
            sum += current
        }
    }
    return sum
}

// console.log('nestedArrays :>> ', nestedArrays([10, [12, 14, [1], [16, [20]]], 10, 11])));

function facts(num: number): number {
    if (num < 2) return 1; 
    return num * facts(num - 1)
} 

// Factorial as loop 
function factLoop (num: number) {
    if (num < 2) return 1
    for (let i = num - 1; i > 0; i--){
        return num * factLoop(i)
    }
}

// console.log('factLoop(5) :>> ', factLoop(21));
// console.log('facts(4) :>> ', facts(20));

function nestedArr(arr: number[]) : number {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        if (Array.isArray(current)) {
            sum += nestedArr(current)
        } else {
            sum += current
        }
    } 
    return sum;
}

// console.log('nestedArr([1, 3, [5], [[[[5]]]]]) :>> ', nestedArr([1, 3, [5], [[[[5]]]]]));