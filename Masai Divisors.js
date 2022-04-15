
// You are provided 3 integers: left, right and k. 
// Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.

function masaiDivisors(left, right, k) {
    let count=0;
    for (i = 0 ; i<= right ;i++){
        if(i>= left && i%k===0){
            count++;
        }
    }
    console.log(count);
}