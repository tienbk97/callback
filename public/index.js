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
      $("#countdown").text("");
      window.location.replace("https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.users.ALL&client_id=1000.THA4BOAZMWUN48434XLJTYE8SCUMH6&response_type=code&access_type=offline&redirect_uri=https://zoho-vcs.herokuapp.com&prompt=consent");
    }
  }, second)


  let code = getParameterByName("code");
  const body = { code: code };
   $.ajax({
        type: "POST",
        url: "/api/code",
        data: JSON.stringify(body),
        success: (data) => {
          console.log(data)
        },
        dataType: "json",
        contentType: "application/json"
    });

  $("#code").val(code);

  $('#copyCode').click(function(e) {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('code').select());
    $("#copyCode").text("Copied!")
  })

});