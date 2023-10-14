let genBtn = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

genBtn.onclick = function(){
    let charac = "1234567890qwertyuioplkjhgfdsazxcvbnnmQWERTYUIOPLKJHGFDSAZXCVBNM";
    let  randomSerial = "";
    for(i=0; i <10;i++){

        randomSerial += charac[Math.floor(Math.random() * charac.length)];
    }

    serialEl.innerHTML = randomSerial;
}