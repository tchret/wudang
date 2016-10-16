$(document).ready(function(){
  $('.program-slider-timeline-item').on('click', function() {
    slug = $(this).data('slug')
    $('.program-slider-timeline-item, .program-slider-item').removeClass('is-active')
    $("#" + slug).addClass('is-active').removeClass('is-before-active')
    $("#" + slug).nextAll().removeClass('is-before-active')
    $("#" + slug).prevAll().addClass('is-before-active')
    $('#' + slug.replace('_timeline', '_item')).addClass('is-active')
  })

  $('.program-slider-arrows-item:first-child').on('click', function() {
    var prevSlug = $('.program-slider-timeline-item.is-active').prev().data('slug');
    if(prevSlug) {
      initTimeline(prevSlug)
    }
  })

  $('.program-slider-arrows-item:last-child').on('click', function() {
    var nextSlug = $('.program-slider-timeline-item.is-active').next().data('slug');
    if(nextSlug) {
      initTimeline(nextSlug)
    }
  })
})

function initTimeline(slug) {
  $('.program-slider-timeline-item, .program-slider-item').removeClass('is-active')
  $("#" + slug).addClass('is-active').removeClass('is-before-active')
  $("#" + slug).nextAll().removeClass('is-before-active')
  $("#" + slug).prevAll().addClass('is-before-active')
  $('#' + slug.replace('_timeline', '_item')).addClass('is-active')
}
