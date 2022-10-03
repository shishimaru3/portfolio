'use strict';

// 全画面フェードイン
$('body').fadeIn(2500);



// 降雪エフェクト
// {
//   $(function() {
//     $(document).snowfall('clear');
//     setTimeout(function(){
//       $(document).snowfall({
//         flakeCount: 20,
//         flakeColor: '#eee',
//         minSize: 0.5,
//         maxSize: 7,
//         minSpeed: 0.5,
//         maxSpeed: 0.6,
//         round: true
//       });
//     }, 1000);  
//   });
// }



// BGM
{
  const bgm = new Audio('../audio/LaNeigePoudreuse.m4a');

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



// SP Menu
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}



// ヘッダー固定
$(function() {
  let target = $('.header').offset().top;
  $(window).on('scroll', function() {
    let currentPos = $(window).scrollTop();
    if (currentPos > target) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });
});