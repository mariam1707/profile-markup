import "bootstrap";

$(function() {

  $(".header__toggle").on("click", function() {
    $("body").toggleClass("menu-open");
  });

  $(".menu-mobile .nav__link").on("click", function() {
    $("body").removeClass("menu-open");
  });

});
  