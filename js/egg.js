var imgElement = document.querySelector(".egg");

window.onload = function () {
   let left = Math.random() * 1000;
    imgElement.style.left = left + "px";

    moveDown();
  

}

function moveDown() {
    let top=0;

    let down = setInterval(function () {
        top = top + 10;
        if (top < window.innerHeight - imgElement.height) {
            imgElement.style.top = top + "px";


        }
        else {
            clearInterval(down);
            imgElement.src = "imgs/egg2.png";
            setTimeout(function () {

                imgElement.style.display = "none";
            }, 1000)
        }

    }, 500)

}
