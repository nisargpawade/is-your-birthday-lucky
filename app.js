const birthDate = document.querySelector("#birthdate");
const luckyNo = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check-btn");
const resultMessage = document.querySelector("#result-msg");

function showMsg(msg){
    resultMessage.innerText = msg;
    resultMessage.style.display = "block";
}

function hideMsg(){
    resultMessage.style.display = "none";
}

function calculateSum(birthDate){
    const birthNo = birthDate.value.replaceAll('-', '');
    var sum = 0;
    for (let i=0; i<birthNo.length; i++) {
        sum = sum + Number(birthNo.charAt(i))
    };
    return sum
}

function checkLucky(birthDate, luckyNo) {
    hideMsg()
    if (Number(calculateSum(birthDate))%Number(luckyNo.value) == 0) {
        console.log("you are lucky");
        showMsg("You are lucky");
    } 
    else {
        showMsg("You are Unlucky");
    console.log("you are unlucky")
}
};

checkBtn.addEventListener("click", function clickHandler() {
    checkLucky(birthDate, luckyNo);
})