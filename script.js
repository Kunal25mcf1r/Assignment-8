const expression = document.getElementById("expression");
const currentNumElement = document.getElementById("currentNum");
let currentNum=0;
let prevSymbol='n';
let currentSymbol;
let Value = 0;

function ProcessOperator(s) {  
    if(prevSymbol='n')
    {
        prevSymbol=s;
        expression.innerText=currentNum+s;
    }  
    else
    {

        switch (currentSymbol) {
            case '-':
                Value = Value -currentNum;
                expression.inner
                break;
            case '+':
                Value = Value +currentNum ;
                break;
            case 'x':
                Value = Value *currentNum;
                break;
            case '/':
                Value = Value /currentNum ;
                break;
            case '%':
                Value=Value+(Value*currentNum)/100;
                break;
        }
    } 
    
    currentSymbol=s;
    expression.innerText = Value;
}
function ProcessNumber(num){

    currentNumElement.innerText = currentNum*10+num;
    currentNum=currentNum*10+num;
}