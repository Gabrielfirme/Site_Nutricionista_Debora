const imgs = document.getElementsByClassName("swiper");
const img = document.querySelectorAll(".swiper img");

let classx = 0;

function carrosel (){
    classx++;

    if(classx > img.length - 1){
        classx = 0;
    }
}