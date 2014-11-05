function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if (thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.each(function() {
    $(this).height(tallest);
  });
}



$(document).ready(function() {
  $(window).load(function() {
    equalHeight($(".thumbnail"));
  });

  $('#top-jumbo').css('height', window.innerHeight + 'px');
  $('#top-bg').css('height', window.innerHeight + 'px');


  var scroll_start = 0;
  var startchange = $('#main-contain');
  var offset = startchange.offset();
  console.log("Startchange: " + startchange.length + "   Offset: " + offset.top + "    scrollTop: " + $(this).scrollTop());
  if (startchange.length) {
    $(document).scroll(function() {
      console.log("Scrolling!");
      scroll_start = $(this).scrollTop();
      if (scroll_start + 50 > offset.top) {
        $('.navbar-default').css('background-color', '#111');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
      if (scroll_start + 454 > offset.top) {
        $('#intro').addClass('intro-rel');
        $('#intro').removeClass('intro-fixed');
      } else {
        $('#intro').addClass('intro-fixed');
        $('#intro').removeClass('intro-rel');
      }
    });
  }

});
