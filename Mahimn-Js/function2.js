function singapore(amount,name){
    return name + " your picnic at singapore with package " + amount
}
function laswegas(amount,name){
    return name + " your picnic at las vegas with package " + amount
}
function goa(amount,name){
    return name + " your picnic at goa with package " + amount
}
var budget = 100;
var fullName = "rahul";
var flag;

if(budget > 3000){
    flag = singapore(budget,fullName)
}
else if(budget > 2000){
    flag = laswegas(budget,fullName)
}
else if(budget > 1000){
    flag = goa(budget,fullName)
}
else{
    console.log("Sorry, you don't have enough budget...");
}

console.log(flag);
