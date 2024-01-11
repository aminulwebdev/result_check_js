let getInput = document.querySelector(".inputbox");
let submitBtn = document.querySelector(".submitbtn")
let resetBtn = document.querySelector(".resetbtn")
let CheckResult = document.querySelector(".result")
let images = document.querySelector(".images")




submitBtn.addEventListener("click", function () {

    if (getInput.value >= 90 && getInput.value <= 100) {
        CheckResult.innerHTML = `I am GPA 5 ( A+ )`
        images.src = "images/m90.jpg"

    } else if (getInput.value >= 80 && getInput.value <= 100) {
        CheckResult.innerHTML = `I am GPA 5 ( A+ )`
        images.src = "images/gpa5.jpg"

    } else if (getInput.value >= 70 && getInput.value < 80) {
        CheckResult.innerHTML = `I am GPA 4 ( A )`
        images.src = "images/m70.jpg"
    } else if (getInput.value >= 60 && getInput.value > 70) {
        CheckResult.innerHTML = `I am GPA 3.50 ( A- )`
        images.src = "images/m60.jpg"
    } else if (getInput.value >= 50 && getInput.value < 60) {
        CheckResult.innerHTML = `I am GPA 3 ( B )`
        images.src = "images/m50.jpg"
    } else if (getInput.value >= 40 && getInput.value < 50){
        CheckResult.innerHTML = `I am GPA 2 ( C )`
        images.src = "images/m40.jpg"
    } else if (getInput.value >= 33 && getInput.value < 40){
        CheckResult.innerHTML = `I am GPA 1 ( D )`
        images.src = "images/m33.jpg"
    } else{
        CheckResult.innerHTML =`Tumi fail`
        images.src = "images/m0.jpg"
    }

})

resetBtn.addEventListener("click", function () {
    getInput.value = "";
    CheckResult.innerHTML = "";
    images.src = "";
})