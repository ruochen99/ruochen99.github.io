$(document).ready(function() {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  $('#sf').hover( function() {
    $('#sf').css("opacity", "0.4")
    $('#sf-detail').css("visibility", "visible")
}, function() {
  $('#sf').css("opacity", "1")
  $('#sf-detail').css("visibility", "hidden")
}

);

$('#zephyr').hover( function() {
  $('#zephyr').css("opacity", "0.4")
  $('#zephyr-detail').css("visibility", "visible")
}, function() {
$('#zephyr').css("opacity", "1")
$('#zephyr-detail').css("visibility", "hidden")
}

);

$('#sd').hover( function() {
  $('#sd').css("opacity", "0.4")
  $('#sd-detail').css("visibility", "visible")
}, function() {
$('#sd').css("opacity", "1")
$('#sd-detail').css("visibility", "hidden")
}

);

$('#ch').hover( function() {
  $('#ch').css("opacity", "0.4")
  $('#ch-detail').css("visibility", "visible")
}, function() {
$('#ch').css("opacity", "1")
$('#ch-detail').css("visibility", "hidden")
}

);

$('#seattle').hover( function() {
  $('#seattle').css("opacity", "0.4")
  $('#seattle-detail').css("visibility", "visible")
}, function() {
$('#seattle').css("opacity", "1")
$('#seattle-detail').css("visibility", "hidden")
}

);

$('#uw').hover( function() {
  $('#uw').css("opacity", "0.4")
  $('#uw-detail').css("visibility", "visible")
}, function() {
$('#uw').css("opacity", "1")
$('#uw-detail').css("visibility", "hidden")
}

);

$('#gg').hover( function() {
  $('#gg').css("opacity", "0.4")
  $('#gg-detail').css("visibility", "visible")
}, function() {
$('#gg').css("opacity", "1")
$('#gg-detail').css("visibility", "hidden")
}

);




});
