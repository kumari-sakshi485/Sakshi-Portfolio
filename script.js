//get tablinks $ tabcontents
var tablinks = document.getElementsByClassName("tab-links"),
  tabcontents = document.getElementsByClassName("tab-contents");
//on opentab function call
function openTab(tabname) {
  for (item of tablinks) {
    item.classList.remove("active-link");
  }
  for (item of tabcontents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// responsive website
// get sidemenu
const sideMenu = document.getElementById("sidemenu");

//on open menu function call
function openMenu() {
  sideMenu.style.right = "0";
}
//on close menu function call
function closeMenu() {
  sideMenu.style.right = "-200px";
}
