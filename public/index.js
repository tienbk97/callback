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

  //CONSTANT
  const client_id = "1000.THA4BOAZMWUN48434XLJTYE8SCUMH6"
  const scope = "ZohoCRM.modules.ALL"
  const access_type = "offline"
  const redirect_uri = "https://zoho-vcs.herokuapp.com";
  const url = `https://accounts.zoho.com/oauth/v2/auth?scope=${scope}&client_id=${client_id}&response_type=code&access_type=${access_type}&redirect_uri=${redirect_uri}&prompt=consent`


  let code = getParameterByName("code");
  const body = { code: code };
   $.ajax({
        type: "POST",
        url: "api/code",
        data: JSON.stringify(body),
        success: (data) => {
          console.log(data)
          if (data.status === 200) {
            $("#code").val(data.refresh_token);
          } else {
            $("#code").val(data.message);
            setTimeout(()=>{
              window.location.replace(url);
            },
            5000)
          }
        },
        dataType: "json",
        contentType: "application/json"
    });

  $('#copyCode').click(function(e) {
    e.preventDefault();
    document.execCommand('copy', false, document.getElementById('code').select());
    $("#copyCode").text("Copied!")
  })

});