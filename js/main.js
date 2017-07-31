var showing = false;
var currentSlide;

var bohredAtomsSlider;
var anotherSlider;

function hideSlide(currentSlide) {
  //shrink box
  $("#".concat(currentSlide) + "Box").css('transform', 'scale(1)');
  //scroll up
  scroll('sc');
  //hide currentSlide
  $("#".concat(currentSlide)).slideUp(500).css('opacity', 0);
  //destroy slider
  window[currentSlide + 'Slider'].destroySlider();
}

function showSlide(nextSlide) {
  //enlarge clicked box
  $("#".concat(nextSlide) + "Box").css('transform', 'scale(1.05)');
  //scroll up
  scroll('sc');
  //show nextSlide
  $("#".concat(nextSlide)).slideDown(500).css('opacity', 1);
  //call slider
  window[nextSlide + 'Slider'] = $('.'+ nextSlide + 'Slider').bxSlider({
    auto: true,
    autoHover: true,
    pagerCustom: '.bx-pager'
  });
}

function changeSlide(nextSlide) {
  hideSlide(currentSlide);
  //enlarge clicked box
  $("#".concat(nextSlide) + "Box").css('transform', 'scale(1.06)');
  //show nextSlide and call the slider after 500ms
  setTimeout(function() {
    $("#".concat(nextSlide)).slideDown(500).css('opacity', 1);
    window[nextSlide + 'Slider'] = $('.'+ nextSlide + 'Slider').bxSlider({
      auto: true,
      autoHover: true,
      pagerCustom: '#bx-pager'
    });
  }, 500);
}

function scroll(id) {
  //scroll to element with id
  $(window).scrollTo(document.getElementById(id), 500);
}

function toggleSlide(nextSlide) {
  //if already showing itself
  if (showing == true && currentSlide == nextSlide) {
    hideSlide(currentSlide);
    showing = false;

  //if already showing something else
  } else if (showing == true && currentSlide != nextSlide) {
    changeSlide(nextSlide);
    showing = true;

  //if not showing
  } else {
    showSlide(nextSlide);
    showing = true;
  }

  currentSlide = nextSlide;
}
