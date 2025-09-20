function abc()
{
    console.log("Functionn is working");
}
abc()

//Exercise 1
var a = 10;
var b = 20;

function add(){
    console.log(a+b);
}

add()


//Exercise with parameters 
function area(length,breadth){
    result = length*breadth;
    console.log(result);
}

area(10,20)


//Return Type
function sum(a,b){
    return a+b;
}
console.log("The sum : " + sum(10,10));