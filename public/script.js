var bottomScreen,topScreen;
var number1,number2,result;
var currentOperator;
var clear=true,showResult=false;

function defineTag(){
    bottomScreen = document.getElementById("nums-bottom");
    topScreen = document.getElementById("nums-top");
}
function enterNumber(number){
    if(showResult==false)
    {
        if(bottomScreen.innerHTML==0){
            bottomScreen.innerHTML="";
        }
        bottomScreen.innerHTML+=number;
    }

}


function clearNumber(){
    clear=true;
    bottomScreen.innerHTML=0;
    topScreen.innerHTML='';
    number1=null;
    number2=null;
    result=null;
    showResult=false;
}

function operation(operator){
    if(clear==true){
        clear=false;
        number1=parseFloat(bottomScreen.innerHTML);
        topScreen.innerHTML+=number1+operator;
        bottomScreen.innerHTML="0";
        currentOperator=operator;
    }
}

function equalTo(){
    number2=parseFloat(bottomScreen.innerHTML);
    topScreen.innerHTML+=number2+"=";
    switch(currentOperator){
        case '+':
            result=sum(number1,number2)
            break;
        case '-':
            result=substract(number1,number2)
            break;
        case '/':
            result=divide(number1,number2)
            break;
        case '*':
            result=multiply(number1,number2)
            break;
    }
    number1=null;
    number2=null;
    showResult=true;
    bottomScreen.innerHTML=result;
    result=null;
}


function sum(num1,num2){
    return num1+num2;
}


function substract(num1,num2){
    return num1-num2;
}

function divide(num1,num2){
    return num1/num2;
}

function multiply(num1,num2){
    return num1*num2;
}


module.exports.sum = sum;
module.exports.multiply = multiply;
module.exports.substract = substract;
module.exports.divide = divide;


