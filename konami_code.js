const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.deatil || event.which || event.location);
    console.log(event.which);
    for (var i = 0; i < code.length; i++) {
      if (key === code[i]) {
        // debugger;
        alert("Hurray!");
      }
    }
  });
}
