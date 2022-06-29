"use strict"

// ===== Ham menu =======
let menu = document.querySelector(".ham-menu > i");
let nav = document.querySelector("nav");

menu.addEventListener("click", function(e) {
    if(nav.style.display === "block" ){
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
});

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


// Left
 for(let i = 0; i < sluzbyBlockLi.length; i++ ) {
    sluzbyBlockLi[i].addEventListener("click", function(e) {


     if ( this.querySelector("p").style.display === "block" ){
                this.querySelector("p").style.display = "none";
               
        } else {
            this.querySelector("p").style.display = "block";
        }
        
    })
 }

 // Right
 let sluzbyBlockLiR = document.querySelectorAll(".sluzby-block-right ul > li");
     sluzbyBlockLiR = Array.prototype.slice.call( sluzbyBlockLiR );



 for(let i = 0; i < sluzbyBlockLiR.length; i++ ) {
    sluzbyBlockLiR[i].addEventListener("click", function(e) {

     if ( this.querySelector("p").style.display === "block" ){
                this.querySelector("p").style.display = "none";
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







