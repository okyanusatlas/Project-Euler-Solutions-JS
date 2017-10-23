//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
// 33 : 3524578

// find vals of all even(çift sayı)  fibonaccis  till 33 ( including)
//
let result = 0;

function fiboNacci(i){
    if ( i <= 1) {
        return 1;
    }
    return  fiboNacci(i-1) + fiboNacci(i-2);
}
//console.log(fiboNacci(5));
for (let i = 0; i < 34 ;i++) {
    if(fiboNacci(i) % 2 ===0) {
        result += fiboNacci(i);
    }
}
console.log(result);