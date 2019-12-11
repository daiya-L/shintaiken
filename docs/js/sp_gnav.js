$(function() {
  $(".nav-toggle").click(function() {
    $(".nav-toggle div").toggleClass("active");
    $(".nav_bg").toggleClass("nav_bg-open");
    $(".gnav").toggleClass("gnav_open");
  });
});

$(function() {
  $(".gnav li a").click(function() {
    $(".nav-toggle div").toggleClass("active");
    $(".nav_bg").toggleClass("nav_bg-open");
    $(".gnav").toggleClass("gnav_open");
  });
});
