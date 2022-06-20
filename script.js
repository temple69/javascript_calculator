function calculator(operand1,operation,operand2){
    let result;
try {
    if (isNaN(operand1) || isNaN(operand2)) {
        throw   new Error("Alphabets  Not allowed Only Number")
    }
    else{
        parseFloat(operand1)
        parseInt(operand2)
        if(operation ==="+"){
            console.log(operand1 + operand2)
        }
        else if(operation ==="-"){
            console.log(operand1 - operand2)
        }
        else if(operation ==="/"){
            result= operand1 /operand2
            console.log(result.toFixed(2))
        }
        else if(operation ==="*"){
            console.log( operand1 * operand2)
        }
    }
} catch (error) {
    console.log(error)
    
}    
}
calculator("67","*","30")