// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// loop from 600851475142 till  0  first mod != 0 ==> answer

const searchedNum = 600851475143;

let greatestPrime = 0;
const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true ;
};

for ( let i = 2 ; i < searchedNum;i++){
    if ( searchedNum % i === 0){
        if(isPrime(i)){
            greatestPrime = i ;
            console.log('greatest now =>', i);
        }
    }
}