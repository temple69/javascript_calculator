let operations={
    '+':"Addition",
    '-':"Subtraction",
    "/":"Divison",
    '*':"Multiplication"
}
function calculator(){
    let operand1= prompt("Enter First Number")
    let operation = prompt("What Operations Would You Like To Perform [+,-,/,*]")
    let operand2= prompt("Enter Second Number")
    let result=0
    if (isNaN(operand1) || isNaN(operand2)) {
        throw   new Error("Alphabets  Not allowed Only Number")
    }
    
    else{
        parseFloat(operand1)
        parseFloat(operand2)
        if(operation ==="+"){
            result+=operand1+operand2
        }
        else if(operation ==="-"){
            result=operand1-operand2
        }
        else if(operation ==="/"){
            result= operand1 /operand2
        }
        else if(operation ==="*"){
            result=operand1*operand2
        }
        else{
            alert("invalid Operation Cannot Perform operation")
        }

    }      
    alert(`Your operation: ${operations[operation]}\n The Result is ${result.toFixed(2)}`)
}
try{
  calculator()
}
catch(err){
    alert(err)
}