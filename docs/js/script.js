new WOW().init();

/*Pace.on('done', function(){
  $('.').fadeIn();
})

/*
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

/*
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  //ここに書いた処理はスマホ閲覧時は有効となる
  $(function(){
      $('.main-content-wrapper').stickyStack({
          containerElement: '.main-content-wrapper',
          stackingElement: 'section',
          boxShadow: '0 -3px 20px rgba(0, 0, 0, 0.25)'
      });
  });
}*/


$(function(){
  setTimeout('stopload()',10000);
});

Pace.on('done', function(){
  $('.pace').fadeOut(100);
})

function stopload(){
  $('.wrap, .wrap img').fadeOut();
  $('.pace').css('display','none');
}

$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 1023;
  if (winW <= devW) {
    Pace.on('done', function(){
      $('.main-visual, .main-visual__bg').fadeIn();
      $('.nav_bg').css({
        'opacity': '1'
      });
    })
  } else {
    Pace.on('done', function(){
      $('.main-visual, .main-visual__bg').fadeIn();
    })
  }
});

Pace.on('done', function(){
  $('.main-visual, .main-visual__bg').fadeIn();
})



if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//ここに書いた処理はスマホ閲覧時は無効となる
  $(function(){
    $(window).scroll(function(){
      if ($(window).scrollTop()+40 > $('#works').offset().top &&　$(window).scrollTop()+40 < $('#activity').offset().top ||  $(window).scrollTop()+40 > $('#member').offset().top &&　$(window).scrollTop()+40 < $('#contact').offset().top){
        $(".gnav .gnav__list li a").addClass("gnav__black");
      }else
        $(".gnav .gnav__list li a").removeClass("gnav__black");
    });
  });
}

$(function(){
  $('#about__link').click(function(){
    var hsize = $('#headers').outerHeight(true);
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
    var hsize = $('#headers').outerHeight(true);
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
    var hsize = $('#headers').outerHeight(true);
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
    var hsize = $('#headers').outerHeight(true);
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
    var hsize = $('#headers').outerHeight(true);
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = hsize + $('#about').outerHeight(true) + $('#works').outerHeight(true) + $('#activity').outerHeight(true) + $('#member').outerHeight(true);
    $("html, body").animate({scrollTop:position + 10}, speed, "swing");
    return false;
  });
});

$(function(){
  $('#top_jump').click(function(){
    var speed = 1000;
    $("html, body").animate({scrollTop:0}, speed, "swing");
    return false;
  });
})

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

$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 1023;
  if (600 <= winW && winW <= devW) {
    const defaultDispCnt = 4; // 初期表示件数
    const addDispCnt = 4;     // 追加表示件数

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

          $(this).hide();

          // もっと見るボタンを非表示
          //if (maxDispCnt <= newCount) {
          //  $(this).hide();
          //}

          return false;
        });
      });
    }(jQuery));
  } else {
    const defaultDispCnt = 3; // 初期表示件数
    const addDispCnt = 6;     // 追加表示件数

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
          $(this).hide();

          // もっと見るボタンを非表示
          //if (maxDispCnt <= newCount) {
          //  $(this).hide();
          //}

          return false;
        });
      });
    }(jQuery));
  }
});

jQuery(function($){
  $('#member1__open').click(function() {
    $('#overlay1').css('display', 'none').fadeIn(800);
  });
  $('#member2__open').click(function() {
    $('#overlay2').css('display', 'none').fadeIn(800);
  });
  $('#member3__open').click(function() {
    $('#overlay3').css('display', 'none').fadeIn(800);
  });
  $('#member4__open').click(function() {
    $('#overlay4').css('display', 'none').fadeIn(800);
  });
  $('#member5__open').click(function() {
    $('#overlay5').css('display', 'none').fadeIn(800);
  });
  $('#member6__open').click(function() {
    $('#overlay6').css('display', 'none').fadeIn(800);
  });
  $('#member7__open').click(function() {
    $('#overlay7').css('display', 'none').fadeIn(800);
  });
  $('#member8__open').click(function() {
    $('#overlay8').css('display', 'none').fadeIn(800);
  });
  $('#member9__open').click(function() {
    $('#overlay9').css('display', 'none').fadeIn(800);
  });
  $('#member10__open').click(function() {
    $('#overlay10').css('display', 'none').fadeIn(800);
  });
  $('#member11__open').click(function() {
    $('#overlay11').css('display', 'none').fadeIn(800);
  });
  $('#member12__open').click(function() {
    $('#overlay12').css('display', 'none').fadeIn(800);
  });
  $('.member__close').click(function() {
    $('#overlay1, #overlay2, #overlay3,#overlay4,#overlay5, #overlay6, #overlay7,#overlay8,#overlay9, #overlay10, #overlay11,#overlay12').fadeOut();
  });
  $(".member__detail-inner").click(function(){
    $('#overlay1, #overlay2, #overlay3,#overlay4,#overlay5, #overlay6, #overlay7,#overlay8,#overlay9, #overlay10, #overlay11,#overlay12').fadeOut();
  });
})
