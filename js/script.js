//Animation menu burger
let burger = document.querySelector(".burger-off");

burger.onclick = function() {
  this.classList.toggle("burger-off");
  this.classList.toggle("burger-on");
  document.querySelector(".dropdown").classList.toggle("dropdown-on");
}