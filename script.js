const btn_nav = document.querySelector('.btn-nav');
const btn_nav_icon = document.querySelector('.fa-solid');
let nav_bar = document.querySelector('.navigation');
let isClicked = false;
btn_nav.addEventListener('click',()=>{
    if(isClicked == false){
        nav_bar.style.height = '220px';
        btn_nav_icon.classList.remove('fa-bars');
        btn_nav_icon.classList.add('fa-xmark');
        isClicked = true;
    }
    else{
        nav_bar.style.height = '0px';
        btn_nav_icon.classList.remove('fa-xmark');
        btn_nav_icon.classList.add('fa-bars');
        isClicked = false;
    }
    
});