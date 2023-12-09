$(document).ready(function(){
  $('#slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    autoplay: true,
    autoplaySpeed: 3500,
  });
});
$(document).ready(function(){
  $('#verticalSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow:false,
    nextArrow: $('.arrow-down-button'),
    draggable: false,
  })
});

function dotsMove(){
  if (document.querySelector('.vs-1').classList.contains('slick-active')) {
    document.querySelector('.dots > img:nth-child(1)').src = "../lesson15-test/Monticello-photos/hollow-circle.svg";
    document.querySelector('.dots > img:nth-child(2)').src = "../lesson15-test/Monticello-photos/full-circle.svg";
  } else if (document.querySelector('.vs-2').classList.contains('slick-active')) {
    document.querySelector('.dots > img:nth-child(2)').src = "../lesson15-test/Monticello-photos/hollow-circle.svg";
    document.querySelector('.dots > img:nth-child(3)').src = "../lesson15-test/Monticello-photos/full-circle.svg";
  } else if (document.querySelector('.vs-3').classList.contains('slick-active')) {
    document.querySelector('.dots > img:nth-child(3)').src = "../lesson15-test/Monticello-photos/hollow-circle.svg";
    document.querySelector('.dots > img:nth-child(4)').src = "../lesson15-test/Monticello-photos/full-circle.svg";
  } else if (document.querySelector('.vs-4').classList.contains('slick-active')) {
    document.querySelector('.dots > img:nth-child(4)').src = "../lesson15-test/Monticello-photos/hollow-circle.svg";
    document.querySelector('.dots > img:nth-child(5)').src = "../lesson15-test/Monticello-photos/full-circle.svg";
  } else if (document.querySelector('#vs-5').classList.contains('slick-active')) {
    document.querySelector('.dots > img:nth-child(5)').src = "../lesson15-test/Monticello-photos/hollow-circle.svg";
    document.querySelector('.dots > img:nth-child(1)').src = "../lesson15-test/Monticello-photos/full-circle.svg";
  }
}


/*function changeDot(num) {
  if (document.querySelector(`.nb-${num}`).src === "../lesson15-test/Monticello-photos/hollow-circle.svg") {
    document.querySelector(`.nb-${num}`).src = "../lesson15-test/Monticello-photos/full-circle.svg"
    if (num === 1) {
      document.querySelector(`.nb-${num + 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num + 2}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num + 3}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
    } else if (num === 2) {
      document.querySelector(`.nb-${num - 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num + 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num + 2}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
    } else if (num === 3) {
      document.querySelector(`.nb-${num - 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num - 2}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num + 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
    } else if (num === 4) {
      document.querySelector(`.nb-${num - 1}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num - 2}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
      document.querySelector(`.nb-${num - 3}`).src = "../lesson15-test/Monticello-photos/hollow-circle.svg"
    }
  }
}*/