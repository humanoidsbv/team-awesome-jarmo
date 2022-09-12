window.onload=function(){
  const menuButton = document.querySelector(".right-menu");
  const menuOpen = document.querySelector(".open-menu");
  const menuClose = document.querySelector(".close-menu");
  const menu = document.querySelector(".main-menu");
  
  menuButton.addEventListener("click", () =>{
    console.log("clicked!");
    menu.classList.toggle("active");
    menuOpen.classList.toggle("active");
    menuClose.classList.toggle("active");
  })
  
  document.querySelectorAll(".menu-items")

}
