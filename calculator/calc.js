document.addEventListener('DOMContentLoaded', function (){
    const buttonAnswer = document.getElementById("learnAnswer");
    const selectColorBack = document.getElementById("settingBackgroundColor");
    const selectColor = document.getElementById("settingFrontColor");

    selectColorBack.addEventListener("input", SetBackColor)
    selectColor.addEventListener("input", SetTextColor)
    buttonAnswer.addEventListener("click", OnClickHandler);
    
});
function SetBackColor(){
    const selectColor = document.getElementById("settingBackgroundColor");

    const background = document.querySelector(".main");
    background.style.backgroundColor = selectColor.value;
}

function SetTextColor(){
    const selectColor = document.getElementById("settingFrontColor");

    const textColor = document.querySelectorAll(".elements");
    textColor.forEach(element => {
       element.style.color = selectColor.value; 
       element.style.borderColor = selectColor.value;
    });
}
function isStrictNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

function Calculator(num1,num2, operator)
{
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            if(num2 == 0){
                SetInfo("На 0 делить нельзя");
                return false;
            }
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            return "ххх";
    }
}

function OnClickHandler()
{
    const firstNumEl = document.getElementById("first_num");
    const secondNumEl = document.getElementById("second_num");
    const operatorEl = document.getElementById("operator");
     
    const firstNum = Number.parseFloat(firstNumEl.value);
    const operator = operatorEl.value;
    const secondNum = Number.parseFloat(secondNumEl.value);

    if(!isStrictNumber(firstNum) || !isStrictNumber(secondNum)){
        SetInfo("Введите корректные данные");
        return;
    }

    let answer = Calculator(firstNum, secondNum, operator);
    if(answer === false){ return;}
    let ans = `<p>${firstNum} ${operator} ${secondNum} = ${answer}</p>`;
    SetInfo(ans);
}

function SetInfo(answer){
    let ans = document.querySelector(".currentAns");
    if(ans === null){
        ans.innerHTML = answer;
        return;
    }
    let pre = document.querySelector(".preAns");
    pre.innerHTML = ans.getHTML();
    ans.innerHTML = answer;
}