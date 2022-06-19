const hamburger = document.querySelector(".toggle-hamburger");
const closeIcon = document.querySelector(".close");
const menu = document.querySelector(".menu");

let closeIconActive = false;
hamburger.addEventListener("click", (event)=>{
    if(closeIconActive == false){
        closeIcon.style.height = "auto";
        closeIcon.style.opacity = "1";
        menu.classList.add("active");
        closeIconActive = true;
    }else if(closeIconActive == true){
        closeIcon.style.height = "0";
        closeIcon.style.opacity = "0";
        menu.classList.remove("active");
        closeIconActive = false;
    }
})
