// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?
let primeNums = [];
const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true ;
};

for (let i = 2; i <129999 ;i++){
    if (isPrime(i)){
        primeNums.push(i);
    }
}
console.log(primeNums);
console.log(primeNums[1000]);