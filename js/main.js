var showing = false;
var transparent = true; //navbar transparency

$(document).ready(function() {
  if(transparent == false) {
    $('.navbar').css('background', 'rgba(23, 22, 24, 0.92)');
  }

  $(window).scroll(function() {
    //if scrolled window at least 10px, make navbar bg not transparent
    if($(window).scrollTop() < 10) {
      $('.navbar').css('background', 'rgba(23, 22, 24, 0)');
      $('.nav-link').removeClass('hover-bg');
      transparent = true;
    } else {
      $('.navbar').css('background', 'rgba(23, 22, 24, 0.92)');
      //make nav bar links bg on hover not transparent
      $('.nav-link').addClass('hover-bg');
      transparent = false;
    }
  })
})

function scrollToId(id) {
  //scroll to element with id
  $(window).scrollTo(document.getElementById(id), 500);
}

function hideSection(section) {
  $("#".concat(section)).slideUp(200).css('opacity', 0);
}

function showSection(section) {
  $("#".concat(section)).slideDown(200).css('opacity', 1);
}

//toggle show/hide section
function toggleSection(section) {
  if (showing == true) {
    hideSection(section);
    showing = false;
  } else {
    showSection(section);
    showing = true;
  }
}
