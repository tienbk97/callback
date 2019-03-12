$(document).ready( function() {

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const second = 1000;
  let distanse = 49;
  x = setInterval(function(){
    $("#countdown").text(`[00:${distanse}]`);
    distanse -= 1;
    if (distanse < 0) {
      clearInterval(x);
      $("#code").val("");
    }
  }, second)


  let code = getParameterByName("code");

  $("#code").val(code);

  $('#copyCode').click(function(e) {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('code').select());
    $("#copyCode").text("Okay")
  })

});