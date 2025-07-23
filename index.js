
checkSpeed(130);

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint){
        console.log('ok');
    }else {
     const  points = Math.floor((speed - speedLimit) / kmPerPoint);
     if(points >= 12){
        console.log('License suspended');
    
     }else{
        console.log('points',points);
     }
    }
    }















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
 console.log( isLands(900,300))
 function isLands(width , height){
/*
 if (width > height){
    return 'true';
 }else {
    return 'false';
 }*/
 return(width>height) ;

 }
  






    