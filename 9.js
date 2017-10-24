// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
//                                                                             a2 + b2 = c2
//     For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
for(let i = 0; i < 500 ;i++){
    for (let j = 0 ; j <500 ; j++){
        let c = Math.sqrt((j*j) + (i * i));
        if ( i + j + c === 1000){
            console.log(i);
            console.log(j);
            console.log(c);
        }
    }
}