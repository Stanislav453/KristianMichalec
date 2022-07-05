"use strict";

// ===== Ham menu =======
let menu = document.querySelector(".ham-menu > i");
let nav = document.querySelector("nav");
let acordeonLi = document.querySelectorAll(".acordeon-li");
let acordeonLiA = document.querySelectorAll(".acordeon-li a");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("show-nav");
  this.classList.toggle("change-i");

  for (const value of acordeonLi) {
      value.classList.toggle("show-li")
  };
  
});


// ==== EXPANDUJÚCA FOTOGALERIA ================

const slides = document.querySelectorAll(".slide");


slides.forEach(function(e) {
    e.addEventListener("click", function() {
        //active vymaze vsetkym
        deleteActiveClass();
        

        e.classList.add("active");

    });
});

function deleteActiveClass(){
    slides.forEach(function(e) {
        e.classList.remove("active");
    });
};

// ==== O MNE BLOCK =======

let showImg = document.querySelector(".showImg");
let body    = document.querySelector("body")



showImg.addEventListener("click", function (e) {
    e.preventDefault()

    //modal
    var modal = document.createElement("div");
    modal.classList.add("modal");

    // img
    let imger = document.createElement("img");
    imger.setAttribute("src", this.href);
    imger.classList.add("imger");

    body.appendChild(modal);
    modal.appendChild(imger);

    console.log()

    //Vynazaie modalu
    document.addEventListener("keyup", function(e){
      if(e.code === "Escape"){
        modal.remove()
      }
   });

   modal.addEventListener("click", function(e){
      modal.remove()
   })
   

  
});


// === KURZY BLOCK ==============
let kurzydiv = document.querySelectorAll(".content-wrap");

for (let i = 0; i < kurzydiv.length; i++) {
  kurzydiv[i].addEventListener("click", function (e) {
    if (
      this.querySelector("ul").style.display === "block" ||
      this.querySelector(".line").style.display === "block"
    ) {
      this.querySelector("ul").style.display = "none";
      this.querySelector(".line").style.display = "none";
    } else {
      this.querySelector("ul").style.display = "block";
      this.querySelector(".line").style.display = "block";
    }
  });
}

// ==== Sluzby block ====

let sluzbyBlockLiAcoredeon = document.getElementsByClassName("acoredeon");

// Left

for (let i = 0; i < sluzbyBlockLiAcoredeon.length; i++) {
  sluzbyBlockLiAcoredeon[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Right
let sluzbyBlockLiR = document.querySelectorAll(".sluzby-block-right ul > li");
sluzbyBlockLiR = Array.prototype.slice.call(sluzbyBlockLiR);

for (let i = 0; i < sluzbyBlockLiR.length; i++) {
  sluzbyBlockLiR[i].addEventListener("click", function (e) {
    if (this.querySelector("p").style.display === "block") {
      this.querySelector("p").style.display = "none";
    } else {
      this.querySelector("p").style.display = "block";
    }
  });
}

// == back to home button ===================================

let backToHome = document.querySelector(".back_to_home");

window.addEventListener("scroll", function (e) {
  let scroll = this.window.scrollY;

  if (Math.ceil(scroll) > 400) {
    backToHome.style.display = "block";
  } else {
    backToHome.style.display = "none";
  }
});
