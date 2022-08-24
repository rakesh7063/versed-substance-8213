// Signinpage js
document.getElementById("signin_page").addEventListener("click",function (){
    document.querySelector(".popup_F").classList.remove("active");
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".close_btn").addEventListener("click",() => {
    document.querySelector(".popup").classList.remove("active");
 
})



// fundraiser page js
document.getElementById("fundraiser").addEventListener("click",function (){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup_F").classList.add("active");
})

document.querySelector(".close_btn_F").addEventListener("click",() => {
    document.querySelector(".popup_F").classList.remove("active");
 
})
