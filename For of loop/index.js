const colors=['red','green','yellow'];


const person={name:'ChannelMergerNode',age:'90'};
for (let key in person)
    console.log(key,person);
// for of loop is similar to for in loop the only differenc is using 'for' insted of 'in' 
for (let color of colors)
    console.log(color);