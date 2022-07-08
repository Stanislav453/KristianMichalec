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

// ===== FOTOGALERIA ================================

let fotogalleryImg = document.querySelectorAll("img");
let body             = document.querySelector("body");

for(let i = 0; fotogalleryImg.length > i; i++) {
    fotogalleryImg[i].addEventListener("click", function(e) {

        //modal
        var modal = document.createElement("div");
        modal.classList.add("modal");

        // img
        let imger = document.createElement("img");
            imger.setAttribute("src", this.src);
            imger.classList.add("imger");

        // Pridanie img a modalu
        body.appendChild(modal);
        modal.appendChild(imger);

            //Vynazaie modalu
        document.addEventListener("keyup", function(e){
        if(e.code === "Escape"){
          modal.remove();
        }
     });

     modal.addEventListener("click", function(e){
        modal.remove()
     });

    });
};

// ==== FOTOGALERIA-SEKCIE show/hide =====================

let fotogalleryBlock      = document.querySelectorAll(".wraper-header");
let fotogalleryUnderBlock = document.querySelectorAll(".fotogalery-block");
let fotogaleryImg         = document.querySelectorAll(".fotogalery-block img");


for(let i = 0; fotogalleryBlock.length > i; i++ ) {
    fotogalleryBlock[i].addEventListener("click", function() {


    let next = this.nextElementSibling;
    next.classList.toggle("show-f");

    for (const value of fotogalleryUnderBlock  ) {
        
        console.log( value )

        // value.style.height = 300 + "px";
    }


        // for (const value of fotogalleryUnderBlock) {
        //     value.classList.toggle("show-f");
        // };
   
   });
};