$(function(){
    $('.main-content-wrapper').stickyStack({
        containerElement: '.main-content-wrapper',
        stackingElement: 'section',
        boxShadow: '0 -3px 20px rgba(0, 0, 0, 0.25)'
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
      //$('#activity').css('height', 500+'vh');
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
