
//constructor function
let address=new Address('a','b','c');
console.log(address)
function Address(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
} 
//factory function
let village= creatVillage('a','b','c');

console.log(village);
function creatVillage(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}