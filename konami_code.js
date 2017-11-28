window.addEventListener("load", function init() {
  // Write your JavaScript code inside the init() function
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  let index=0
  document.addEventListener('keydown',function konamiCode(event) {
    const key = parseInt(event.detail || event.which);
    console.log(key)
    if (key === code[index]) {

      index++;

      if (index === code.length) {
        alert("Congratulations, correct code!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
})
