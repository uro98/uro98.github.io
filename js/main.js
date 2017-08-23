var showing = false;

function scroll(id) {
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
