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







