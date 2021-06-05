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
    slidesToShow: 4
  })
})