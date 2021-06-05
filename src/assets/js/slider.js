// document.addEventListener( 'DOMContentLoaded', function () {
// 	new Splide( '#card-slider', {
// 		perPage    : 2,
// 		breakpoints: {
// 			600: {
// 				perPage: 1,
// 			}
// 		}
// 	} ).mount();
// } );

$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    touchMove: false,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    // slidesPerRoll: 1,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
})