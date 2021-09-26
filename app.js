const birthDate = document.querySelector("#birthdate");
const luckyNo = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check-btn");
const resultMessage = document.querySelector("#result-msg");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const gift1 = document.querySelector("#gift1");
const gift2 = document.querySelector("#gift2");
const imgLucky = document.querySelector("#img-lucky");
const imgUnlucky = document.querySelector("#img-unlucky");

alert("Any data you share on this website is not stored.")

function showMsg(msg){
    resultMessage.innerText = msg;
    resultMessage.style.display = "block";
}

function hideMsg(){
    resultMessage.style.display = "none";
}

function calculateSum(birthDate){
    const birthNo = birthDate.value.replaceAll('-', '');
    let sum = 0;
    for (let i=0; i<birthNo.length; i++) {
        sum = sum + Number(birthNo.charAt(i))
    };
    return sum
}

function displayLucky(){
    container.style.backgroundImage = "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)";
    imgLucky.style.display = "block";
}
function displayUnlucky(){
    container.style.backgroundImage = "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)";
    button.style.backgroundColor = "#0EA5E9";
    gift1.style.display = "none";
    gift2.style.display = "block";
    imgUnlucky.style.display = "block";
}

function checkLucky(birthDate, luckyNo) {
    hideMsg()
    gift1.style.display = "block";
    gift2.style.display = "none";
    imgLucky.style.display = "none";
    imgUnlucky.style.display = "none";
    button.style.backgroundColor = "#FB923C";
    container.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    if (Number(calculateSum(birthDate))%Number(luckyNo.value) == 0) {
        showMsg("Your birthday is lucky");
        displayLucky();
    } 
    else {
        showMsg("Your Birthday is Unlucky.\nDon't worry, apart from this game, your birthday is the luckiest day of your life😄");
    displayUnlucky()
    }
};

checkBtn.addEventListener("click", function clickHandler() {
    hideMsg()
    if (luckyNo.value.length === 0 || birthDate.value.length === 0) {
        showMsg("Make sure the values you've entered are valid")
    }
    else (checkLucky(birthDate, luckyNo))
})