$(document).ready( function() {

  // function setCookie(cname, cvalue, exdays) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //   var expires = "expires="+d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  function getStorage(cname) {
    let obj = JSON.parse(localStorage.getItem(cname));
    console.log("get", obj);
    let result = null
    const now = Date.now();
    if (obj) {
      var timestamp = obj.timestamp;
      console.log(timestamp)
      console.log(now)
      console.log(timestamp > now)
      if (timestamp > now) {
        return obj.value;
      }
    }
    return result
  }

  function checkStorage() {

    org_id = getStorage("org_id")
    user_id = getStorage("user_id")
    tenant_id = getStorage("tenant_id")
    agent_id = getStorage("agent_id")

    if (org_id && tenant_id && user_id && agent_id) {
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
      })
    } else {
      alert("yOu sTupiD, set storage first ~~")
    }
  }

  checkStorage();

});