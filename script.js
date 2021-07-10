function addition(){
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value; 
    document.getElementById("result").innerHTML = parseInt(num1)+parseInt(num2);
}
function subtract(){
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    if(num1>num2){
        document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
    }
    else{
        document.getElementById("result").innerHTML = parseInt(num2) - parseInt(num1);
    }
}
function multiply(){
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = parseInt(num1) * parseInt(num2);
}
function divide(){
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
}