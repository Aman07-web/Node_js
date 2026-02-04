export function sum(a,b){
    return a+b;
}

export function multiply(a,b){
    return a*b;
}

export function subtract(a,b){
    return a-b;
}

export function divide(a,b){
    if(b===0){
        return "Cannot divide by zero";
    }
    return (a/b).toFixed(2);
}



/*
  module.exports={sum,multiply,subtract,divide};
*/