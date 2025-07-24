
 let marks =[80,80, 90]
 console.log(calculateGrade(marks));

function calculateGrade(marks){
    const average = calculateAverage(marks);
 

   if(average < 90){
      console.log('A') 
   }if (average <80){
      console.log('B') 
   }if(average < 70){
      console.log('C') 
   }if(average < 60){
      console.log('D') 
   }if(average < 1){
      console.log('F')
   }
}
function calculateAverage(array){
 let sum =0;
   for (let value of array)
    sum += value;
  return sum/array.length;
}
