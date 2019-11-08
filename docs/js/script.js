new WOW().init();
/*
$(function(){
  $('a[href^="#"]').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize;
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
  });
});*/

$(function(){
    $('.main-content-wrapper').stickyStack({
        containerElement: '.main-content-wrapper',
        stackingElement: 'section',
        boxShadow: '0 -3px 20px rgba(0, 0, 0, 0.25)'
    });
});

$(function(){
  $('#about__link').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize;
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
})

$(function(){
  $('#works__link').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize + $('#about').outerHeight(true);
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
});

$(function(){
  $('#activity__link').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize + $('#about').outerHeight(true) + $('#works').outerHeight(true);
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
});

$(function(){
  $('#member__link').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize + $('#about').outerHeight(true) + $('#works').outerHeight(true) + $('#activity').outerHeight(true);
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
});

$(function(){
  $('#contact__link').click(function(){
    var hsize = window.innerHeight;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize + $('#about').outerHeight(true) + $('#works').outerHeight(true) + $('#activity').outerHeight(true) + $('#member').outerHeight(true);
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
});

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


const defaultDispCnt = 3; // 初期表示件数
const addDispCnt = 2;     // 追加表示件数

(function ($) {
  $(function () {
    let maxDispCnt = 0;     // 最大表示件数
    let currentDispCnt = 0; // 現在の表示件数
    let tileList = $('.activity__list').children('.activity__article'); // 一覧のli子要素をすべて取得

    // 一覧の初期表示
    $(tileList).each(function (i, elem) {
      // 初期表示件数のみ表示
      if (i < defaultDispCnt) {
        $(this).show();
        currentDispCnt++;
      }
      maxDispCnt++;

      // もっと見るボタンを表示
      let displayed = 0;
      if (maxDispCnt > currentDispCnt && !displayed) {
        $('.more__btn').show();
        displayed = 1;
      }
    });

    // もっと見るボタンクリックイベント
    $('.more__btn').click(function () {
      let newCount = currentDispCnt + addDispCnt; // 新しく表示する件数
      // 新しく表示する件数のみ表示
      $(tileList).each(function (i, elem) {
        if (currentDispCnt <= i && i < newCount) {
          $(this).show();
          currentDispCnt++;
        }
      });

      // もっと見るボタンを非表示
      if (maxDispCnt <= newCount) {
        $(this).hide();
      }

      return false;
    });
  });
}(jQuery));
