//Declaring Varibale
let name = 'Kishalan';
console.log(name);

//Using Constant 
const interstRate = 0.3;
console.log(interstRate);

//Primitive Types
let user = 'Mosh';
let age = 20;
let isApproved = false;
let fisrtName = undefined;
let selectedColor = null;

//Objects
let company = {
    location : 'Colombo',
    rating : 4.5
}

//Changing the properties in an object
company.location = 'Jaffna';
console.log(company);

company['rating'] = 4.2;
console.log(company);

//Arrays
let selectedItems = ['Car','Bus'];
console.log(selectedItems);

console.log(selectedItems[0]);

//Adding new items to array
let fruits = ['Apple','Orange'];
fruits[2] = 1;
console.log(fruits);

//Calculating lenthg of an array 
console.log(fruits.length)


//Functions
function greet(){
    console.log('Hello my Friend!');
}

greet();

//Arguments & Parametters in Functions 
function enter(userName){
    console.log('Hello' +' ' + userName)
}

enter('Kishalan');
enter('Ronaldo')

//Setting multiple Arguments
function detail(fName,lName){
    console.log('Hello' +' ' + fName + ' ' + lName)
}

detail('Cristiano','Ronaldo')