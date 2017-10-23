// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

//  2 tane 3 basamaklı rakamı çarp  sonra  sayıyı karşılaştır palindromluğa göre
let result = 0;

// this function checks if the number is palindrome
function palindrome(num) {
    let last3digits = num % 1000 ;
    let last3digitsReversed = '';
    let first3digits = Math.floor(num / 1000);
    // check if first3digihts =  reverse of last3digits
    while(last3digits > 1){
        last3digitsReversed += String(last3digits % 10);
        last3digits = Math.floor(last3digits / 10);
    }
    last3digitsReversed = Number(last3digitsReversed);

    return last3digitsReversed === first3digits ;

}

for (let i = 100; i < 999 ; i++){
    for( let j = 100; j< 999 ; j++){
        if(palindrome(i*j)){
            if ( i * j > result){
                result = i * j;
                console.log('Now', result);
            }
        }
    }
}

console.log(result);