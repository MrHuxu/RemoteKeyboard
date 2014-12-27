$(function () {
  var str = '';
  $('.letter').bind('click', function () {
    if ($('#url').text() === '...')
      str = '';
    str = str + $(this.children).text().toLowerCase();
    $('#url').text(str);
  });

  $('#clear').click(function () {
    str = '';
    $('#url').text('...');
  });
  
  $('#back').click(function () {
    str = str.substring(0, str.length - 1);
    if (str.length === 0) {
      $('#url').text('...');
    } else {
      $('#url').text(str);
    }
  });

  $("body").on("copy", "#copy", function(e) {
    if ($('#url').text() != '...') {
      e.clipboardData.clearData();
      e.clipboardData.setData("text/plain", $('#url').text());
      e.preventDefault();
      $('#modalMessage').text($('#url').text() + ' has been copied to the clipboard');
      for (var i = 4; i >= 1; i--) {
        $($('#url_list').find('a')[i]).text($($('#url_list').find('a')[i - 1]).text());
        $($('#url_list').find('a')[i]).attr('href', 'http://' + $($('#url_list').find('a')[i - 1]).text());
      }
      $($('#url_list').find('a')[0]).text($('#url').text());
      $($('#url_list').find('a')[0]).attr('href', 'http://' + $('#url').text());
      $('#url').text('...');
    }
  });

});