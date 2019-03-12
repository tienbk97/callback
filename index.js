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

  let code = getParameterByName("code");

  $.post(`https://accounts.zoho.com/oauth/v2/token?code=${code}&client_id=1000.THA4BOAZMWUN48434XLJTYE8SCUMH6&client_secret=4b4115ac65ce49e949893e310387c77e6a5021ce34&redirect_uri=https://callback-zoho.herokuapp.com&grant_type=authorization_code`,
    function(data) {
      console.log(data);
    })

  $("#code").val(code);

  $('#copyCode').click(function(e) {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('code').select());
    $("#copyCode").text("Okay")
  })

});