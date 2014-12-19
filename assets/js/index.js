$(function () {
  var str = '';
  $('.letter').bind('click', function () {
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

/*
  $("body").on("copy", "#copy", function(e) {
    e.clipboardData.clearData();
    e.clipboardData.setData("text/plain", $('#url').text());
    e.preventDefault();
    $('#modalMessage').text($('#url').text() + ' has been copied to the clipboard');
  });
*/

  $('#copy').click(function () {
    $('#url_list').append("<li class='list-group-item'><h3>zhanqi.tv</h3></li>");
  })
});