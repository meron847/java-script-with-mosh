const output=fizzBUzz(true);
console.log(output);

function fizzBUzz(input){
 if((input % 3 === 0) && (input % 5 ===0 )){
 return 'fizzBUzz';
 }if(typeof input !=='number'){
  return NaN;
 }if(input % 3===0){
  return 'Fizz';
 } if(input % 5===0){
    return 'Buzz';   
 }if((input % 3 !==0)&& (input % 5 !==0)){


    return input;
 }
 }