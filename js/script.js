function scrollToTarget(ID, offsetValue) {

  if (offsetValue === undefined) { offsetValue = 0 }

  distance = Math.abs(jQuery(window).scrollTop() - $("#" + ID).offset().top + offsetValue)
  ratio = distance / $(document).height();
  speed = ratio * 2400

  if (speed < 1000) { speed = 1000 }

  $('html, body').stop().animate({
    scrollTop: $("#" + ID).offset().top + offsetValue
  }, speed);
  $(".dropdown").removeClass("dropdown-on");
  $(".close").removeClass("close-on");
  return false
}

//Animation menu burger
let burger = document.querySelector(".burger");
burger.onclick = function () {
  this.classList.toggle("burger-on");
  document.querySelector(".dropdown").classList.toggle("dropdown-on");
  document.querySelector(".close").classList.toggle("close-on");
}
let croix = document.querySelector(".close");
croix.onclick = function () {
  this.classList.toggle("close-on");
  document.querySelector(".dropdown").classList.toggle("dropdown-on");
}

// Consentement des cookies
function CookieConsent(ID) {
  $("#cookie").css('display', 'none');
}
let prev = 0;
let $window = $(window);
let nav = $('nav');

$window.on('scroll', function () {
  let scrollTop = $window.scrollTop();
  nav.toggleClass('nav-hidden', scrollTop > prev);
  prev = scrollTop;
});