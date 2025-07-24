const movie={
    title:'a',
    rating:'2.9',
    director:'b'
};

console.log(showProperties(movie));
function showProperties(obj){
for(let key in obj)
    console.log(key)

}

console.log(show(movie));
function show(object){
for(let key in object)
    if(typeof object[key]==='string')
    console.log(key,object[key])

}
