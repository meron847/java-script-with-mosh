let i=0;
while (i <= 5){
    if(i % 2 !== 0) ;
    console.log(i);
    i++;
}






















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


    console.log(sum(10));

function sum(limit){
    let sum =0;

 for(let i=0; i<= limit; i++)
    if(i% 3 ===0 ||i % 5===0)
        sum +=i;


 return sum;
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
  






    