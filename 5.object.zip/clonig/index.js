const circle ={
    radius:1,
    draw(){
        console.log('draw');
    }
};
/*
const another ={};
for(let key in circle)
    another[key]=circle[key];
*/
//const another = Object.assign({color:'red'}, circle);

const another ={...circle};//this is the simplest way to clone an object

console.log(another);