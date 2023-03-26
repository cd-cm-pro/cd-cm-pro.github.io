var consolelogdef = console.log;
var consoleinfodef = console.info;
var consolewarndef = console.warn;
var consoleerrordef = console.error;
var visualconsole = document.getElementById("visualconsole");

var scrollEnabled = true;
var toggleScrollBtn = document.getElementById("toggle-scroll");

toggleScrollBtn.addEventListener("click", function() {
  scrollEnabled = !scrollEnabled;
  toggleScrollBtn.textContent = scrollEnabled ? "스크롤 끄기" : "스크롤 켜기";
  updateScroll()
});



function updateScroll() {
    var element = document.getElementById("visualconsole");
    if (scrollEnabled == true) {
      autoscroll = setInterval(function(){
        element.scrollTop = element.scrollHeight;
      },5)
    } else {
      clearInterval(autoscroll)
    }
  }
  

console.log = function(e) {
  visualconsole.innerHTML += "<span class='log'>" + e + "</span><br>";
  consolelogdef(e);
};

console.info = function(e) {
  visualconsole.innerHTML += "<span class='info'>" + e + "</span><br>";
  consoleinfodef(e);
};

console.warn = function(e) {
  visualconsole.innerHTML += "<span class='warn'>" + e + "</span><br>";
  consolewarndef(e);
};

console.error = function(e) {
  visualconsole.innerHTML += "<span class='error'>" + e + "</span><br>";
  consoleerrordef(e);
};

document.getElementById("coderun").onclick = function() {
  var coderuntext = Function(document.getElementById("code").value);
  coderuntext();
};
