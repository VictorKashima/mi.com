$(document).ready(function() {

  $(".category").hover(
    function() {
      $(".bottom-bar").addClass("show");
      $('section').addClass("half-opacity");
    },

    function() {
      $(".bottom-bar").removeClass("show");
      $("section").removeClass("half-opacity");
    }
  );

  $(".bottom-bar").hover(
    function() {
      $(".bottom-bar").addClass("show");
      $("section").addClass("half-opacity");
    },

    function() {
      $(".bottom-bar").removeClass("show");
      $("section").removeClass("half-opacity");
    }
  );

  document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".nav-main").classList.toggle("show-menu")
  );


});