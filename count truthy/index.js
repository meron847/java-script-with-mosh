

let array=[3,4,2];
console.log(countTruthy(array));
function countTruthy(array){
   let count=0;
   for  (let value of array){
  if (value)
    count++;
    
   }
    return count;
    }

















