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
  $("#code").val(code);


  let button = document.getElementById('copyCode');

  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('code').select());
  });

});