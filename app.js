const birthDate = document.querySelector("#birthdate");
const luckyNo = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", function clickHandler() {
    console.log(birthDate.value);
    console.log(luckyNo.value);
})