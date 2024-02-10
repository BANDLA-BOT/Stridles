
function skip_offer(){
    let element = document.getElementById("skip");
    element.style.display = "none"
}
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.playbackRate = 0.6; // Adjust the value to control the speed (0.5 for half speed, 2.0 for double speed, etc.)
  })
  
  function showSignUp(){
    let showSignUp = document.getElementById("signup");
    showSignUp.style.display = "block"
  }
  function showLogin(){
    let showLogin = document.getElementById("signup");
    showLogin.style.display = "none"
  }