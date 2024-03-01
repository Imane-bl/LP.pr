//<a href="Other Links">Other Links</a>
   
//<div class="mega-menu-hidden">
let linkOther=document.querySelector("a");
let menu=document.getElementById("mega-menu-hidden");


function  mOut(obj){
 
        obj.innerHTML = "Thank You"
/* document.body.appendChild(menu);*/
   menu.classList.remove("active");

 
   

}
 function mOver(obj){
  obj.innerHTML = "Mouse Over Me"
    menu.classList.add("active");

 }
