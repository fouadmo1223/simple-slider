firstNumber = document.getElementById("first");
secondNumber = document.getElementById("second");
result = document.getElementById("Result");

thirdNumber = document.getElementById("third");
forthNumber = document.getElementById("forth");
result2 = document.getElementById("Result2");


firstNumber.onchange = function () {
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);

}
secondNumber.onchange = function () {
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);

}

thirdNumber.onchange = function () {
    result2.innerHTML = parseInt(thirdNumber.value) * parseInt(forthNumber.value);

}
forthNumber.onchange = function () {
    result2.innerHTML = parseInt(thirdNumber.value) * parseInt(forthNumber.value);

}