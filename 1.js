let totalOf3 = 0;
let totalOf5 = 0;
let totalOf15 = 0;
for (let i = 0; i < 1000 ;i++) {
    if ( i % 3 === 0){
        totalOf3 += i ;
    }
    if ( i % 5 === 0){
        totalOf5 += i ;
    }
    if ( i % 15 === 0){
        totalOf15 += i ;
    }
}

const result = totalOf3 + totalOf5 - totalOf15 ;

console.log('result', result);