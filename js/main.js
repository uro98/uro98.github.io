var showing = false;
var transparent = true; // Navbar transparency

$(document).ready(function() {
  $(window).scroll(function() {
    // If scrolled window at least 10px, make navbar bg not transparent
    if($(window).scrollTop() < 10) {
      $('.main-navbar').css('background', 'rgba(23, 22, 24, 0)');
      $('.main-nav-link').removeClass('hover-bg');
    } else {
      $('.main-navbar').css('background', 'rgba(23, 22, 24, 1)');
      // Make nav bar links bg on hover not transparent
      $('.main-nav-link').addClass('hover-bg');
    }
  })
  // Move background based on cursor position (for night.png)
  // var moveAmount = 4;
  // $(".jumbotron").mousemove(function(e){
  //   var height = $(window).height();
  //   var width = $(window).width();
  //   var newX = 55 + e.pageX / width * moveAmount;
  //   var newY = 92 + e.pageY / height * moveAmount;
  //   $(".jumbotron").css("background-position", newX + "% " + newY + "%");
  // })
})

function scrollToId(id) {
  // Scroll to element with id
  $(window).scrollTo(document.getElementById(id), 500);
}

function hideSection(section) {
  $("#".concat(section)).slideUp(200).css('opacity', 0);
}

function showSection(section) {
  $("#".concat(section)).slideDown(200).css('opacity', 1);
}

// Toggle show/hide section
function toggleSection(section) {
  if (showing == true) {
    hideSection(section);
    showing = false;
  } else {
    showSection(section);
    showing = true;
  }
}
