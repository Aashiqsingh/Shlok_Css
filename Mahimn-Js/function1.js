// function -- function keyword
// return -- return keyword

// There are four type of functions
// 1. without return type without argument 
// 2. without return type with argument
// 3. with return type without argument
// 4. with return type with argument



// 1. without return type without argument 
function demo(){

    console.log("demo function called..");
    
}


// demo()

// 2. without return type with argument

function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add(4,5)


// 3. with return type without argument

function test(){

    return "with return type without argument";
}

// var x = test()
// console.log(x);

// console.log(test());



// 4. with return type with argument

// function mul(x,y){

//     return x*y;
// }

// var x = mul(3,4)
// console.log("multiply = ",x);


function mul(x,y){
    return x*y;
}


var a = parseInt(prompt("Enter a number"))
var b = parseInt(prompt("Enter another number"))

var x = mul(a,b)
console.log("multiply = ",x);



