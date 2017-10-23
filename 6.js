// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
//     (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
let toplam = 0;
let other = 0;
for ( let i = 1 ; i <= 100 ;i++ ){
    toplam += i ;
    other += Math.pow(i,2);
    console.log('top',toplam);
    console.log('oth',other);
}
toplam = Math.pow(toplam,2);

console.log(toplam-other);
