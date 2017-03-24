$(document).ready(function() {
  $('.map-full-size').on('click', function() {
    $('.map').toggleClass('is-full-size')
    if($('.map-full-size').text() == 'COLLAPSE') {
      $('.map-full-size').text('FULL SIZE')
      $('.map-full-size').removeClass('is-colored')
    } else {
      $('.map-full-size').text('COLLAPSE')
      $('.map-full-size').addClass('is-colored')
    }
  })
})
;
