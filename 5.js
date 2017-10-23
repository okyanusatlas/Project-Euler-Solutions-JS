// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let result =1;
let primeNums = [];
let nonPrimeNums = [];
const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true ;
};

for ( let i =  1 ; i < 20;i++){
    if(isPrime(i)){
        primeNums.push(i);
        result *= i ;
    }
    else {
        nonPrimeNums.push(i);
    }
}
for ( let i = 0 ; i < nonPrimeNums.length ; i++){
    for( let j = primeNums.length - 1;  j >= 0 ; j--){
        if ( nonPrimeNums[i] % primeNums[j] === 0) {
            nonPrimeNums[i] = nonPrimeNums[i]/primeNums[j];
            if(nonPrimeNums[i] === 1){
                nonPrimeNums.splice(i,1);
            }
        }
    }
}
result = result * 24 ; // hard coded unfortunately ( 24 is LCT of the reaming array
console.log(result);