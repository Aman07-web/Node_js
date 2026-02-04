function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    if(b===0){
        console.log("can't do this");
    }
    else{
        return (a/b).toFixed(2);
    }
}

module.exports={sum,
    multiply,
subtract,
divide
}