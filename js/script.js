"use strict"

// === KURZY BLOCK ==============
let kurzydiv = document.querySelectorAll(".content-wrap");

for(let i = 0; i < kurzydiv.length; i++){
    kurzydiv[i].addEventListener("click", function(e) {

  if( this.querySelector("ul").style.display === "block" || this.querySelector(".line").style.display === "block"){
    this.querySelector("ul").style.display = "none";
    this.querySelector(".line").style.display = "none";
} else {
    this.querySelector("ul").style.display = "block";
    this.querySelector(".line").style.display = "block";
} 
        

    })
}



// ==== Sluzby block ====

let sluzbyBlockLi = document.querySelectorAll(".sluzby-block-left ul > li");
    sluzbyBlockLi = Array.prototype.slice.call( sluzbyBlockLi );



 for(let i = 0; i < sluzbyBlockLi.length; i++ ) {
    sluzbyBlockLi[i].addEventListener("click", function(e) {

     if ( this.querySelector("p").style.display === "block" ){
                this.querySelector("p").style.display = "none"
        } else {
            this.querySelector("p").style.display = "block";
        }
        
    })
 }

// == back to home button ===================================

let backToHome = document.querySelector(".back_to_home");

window.addEventListener("scroll", function(e){
    let scroll = this.window.scrollY;

    if(Math.ceil(scroll) > 400) {
        backToHome.style.display = "block";

    } else {
        backToHome.style.display = "none";
    }

})







