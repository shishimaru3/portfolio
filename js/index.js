'use strict';

// ロゴアニメーション
const LoadAnime = $('.loading-animation');
$(window).on('load', function(){
  LoadAnime.delay(3000);
});



// FV表示(ローディング後)
$(function(){
  $('section').css({opacity: '0'});
  setTimeout(function(){
    $('section').stop().animate({opacity: '1'}, 2000);
  }, 3000);
});



// BGM
{
  const bgm = new Audio('audio/LaNeigePoudreuse.m4a');

  $('#play').on('click', function() {
    console.log('Play!');
    bgm.play();
    bgm.loop = true;
  });
  $('#stop').on('click', function(){
    console.log('Stop!');
    bgm.pause();
    bgm.currentTime = 0;
  });
}



// bgm-btn click後aboutページへ自動遷移
$(function(){
  $('.bgm-btn').on('click', function(){
    console.log('ページ遷移します');
    $('body').fadeOut(5000);
    setTimeout(function(){
      window.location.href = 'html/about.html';
    }, 3000);
  });
});
