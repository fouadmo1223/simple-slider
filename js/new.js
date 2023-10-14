
let tabs = document.querySelectorAll(".tabs li");
let tabsAraay = Array.from(tabs);

let divs = document.querySelectorAll(".content div");
let divsAraay = Array.from(divs);

tabsAraay.forEach((ele) => {
    ele.addEventListener("click",function(e){

        tabsAraay.forEach((ele) => {

            ele.classList.remove("active");

        })

        ele.classList.add("active");

          divsAraay.forEach((div) => {

            div.style.display="none"

        })

        document.querySelector(e.currentTarget.dataset.con).style.display="block"

    })

  
    
})