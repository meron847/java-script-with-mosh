const circle={
    radius:1,
    draw()  {

    }
};
for(let key in circle)
    console.log(key,circle[key])
//we can not use for of loops b/c we use for of loops when we have  array or maps we donot use it in object
for(let key of Object.keys(circle))
    console.log(key);

// it returns in array
for(let entry of Object.entries(circle))
    console.log(entry);


if ('radius' in circle)console.log('yes');