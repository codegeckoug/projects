let ball1=12
let ball2= 5

let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")

function addBtn(){
  home.textContent = ball1 + 1;
}
function secondBtn(){
  home.textContent = ball1 + 2;
}
function thirdBtn(){
  home.textContent = ball1 + 3;
}
function guestBtn(){
  guest.textContent = ball2 + 1;
}
function fourthBtn(){
  guest.textContent = ball2 + 2;
}
function fifthBtn() {
  guest.textContent = ball2 + 3;
}