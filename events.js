var imgsArray = [
    "imgs/1.jpg",
    "imgs/2.jpg",
    "imgs/3.jpg",
    "imgs/4.jpg",
    "imgs/5.jpg",
    "imgs/6.jpg",
    "imgs/7.jpg"];

let indexImge = 0;
let stopped = false;



var imgElement = document.querySelector("img");
var nextButton = document.querySelector(".next");
var perviousButton = document.querySelector(".pervious");
var slideButton = document.querySelector(".slide");
var stopButton = document.querySelector(".stop");

imgElement.src = imgsArray[indexImge ];

nextButton.onclick = function () {
    imgElement.src = imgsArray[indexImge+1];
    indexImge++;
    if (indexImge >= imgsArray.length-1) {
        indexImge = 0;
    }
}


perviousButton.onclick = function () {
    imgElement.src = imgsArray[indexImge - 1];
    indexImge--;
    if (indexImge < 0) {
        imgElement.src = imgsArray[imgsArray.length-1];
        indexImge = imgsArray.length - 1;
    }
}


//stopButton.onblur = function () {
   // stopped = true;
//}


var slider;

slideButton.onclick = function () {
    slideButton.disabled = "true";
    
        slider =  setInterval(function () {
            imgElement.src = imgsArray[indexImge];
            indexImge++;

            if (indexImge == imgsArray.length)
                indexImge = 0;
       }, 1000);



    }



stopButton.onclick = function () {
    slideButton.disabled = false;
    clearInterval(slider);
    
   

}


  



