//Animation menu burger
//let burger = document.querySelector(".burger-off");


/*
burger.onclick = function () {
  this.classList.toggle("burger-off");
  this.classList.toggle("burger-on");
  document.querySelector(".dropdown").classList.toggle("dropdown-on");
}
*/

function scrollToTarget(ID, offsetValue) {

  if (offsetValue === undefined) { offsetValue = 0 }

  distance = Math.abs(jQuery(window).scrollTop() - $("#" + ID).offset().top + offsetValue)
  ratio = distance / $(document).height();
  speed = ratio * 2400

  if (speed < 1000) { speed = 1000 }

  console.log("Distance : " + distance)
  console.log("Ration :" + ratio)
  console.log("Vitesse : " + (speed / 1000))

  $('html, body').stop().animate({
    scrollTop: $("#" + ID).offset().top + offsetValue
  }, speed);

  return false
}