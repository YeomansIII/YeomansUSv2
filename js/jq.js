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
  $('#top-jumbo').css('height', window.innerHeight + 'px');
  $('#top-bg').css('height', window.innerHeight + 'px');
  equalHeight($(".thumbnail"));

    var mainbottom = 300;

  $(window).on('scroll', function() {

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar-default').addClass('past-main');
    } else {
      $('.navbar-default').removeClass('past-main');
    }

  });

});
