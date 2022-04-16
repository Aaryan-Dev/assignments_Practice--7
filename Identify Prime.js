// You are given a number stored in a variable with the namenum

// Check if the number is a prime number or not

// If the value stored innum, is a prime number printYes, else printNo

// Note : A prime number is a number, that is divisible by only 1 and the number itself


function identifyPrime(num) {
    for(j=1; j<=num; j++){
  
let count =0
  for(i=1; i<=j; i++){
  if(j%i === 0){
  count++
  } 
  } 
  if(count==2){
  console.log(j);
  }
}
    
    //or

function identifyPrime(num) {
    
    primo = true;
if (num === 1) {
   console.log("No");
}
else if (num > 1) {
   for (let i = 2; i < num; i++) {
       if (num % i === 0) {
           primo = false;
           break;
       }
   }
   if (primo) {
       console.log("Yes");
   } else {
       console.log("No");
   }
}
else {
   console.log("No");
}
}



// or

function identifyPrime(num) {
    
    if(num!==1){
      for(i= 2; i < num; i++) { 
                 let what  = num%i ===0;
                 
                 if(what){
                 let hello=   console.log("No");
                     if(hello = "No"){
                          break;
                     }
                     console.log("No");
             }
             else{
               let pello = console.log("Yes");

                if(pello = "No"){
                    break;
               }
               console.log("Yes");
             }
    }
}
else {
     console.log("No");
}
}
identifyPrime(num)
