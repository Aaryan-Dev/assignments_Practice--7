// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of N, on a condition that it should be divisible by Y

function sumOfMultiples(n,k,y) {

    let sum = 0;
    let mul = n*k;
    
    for (i = 0 ; i<= mul; i++){
        if( i%y===0 && i%n===0  ){
            sum = sum + i;
        }
    }
    console.log(sum);
    }
    