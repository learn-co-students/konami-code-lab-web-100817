const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
const input = document.body
function init() {
  // You'll want to attach an event listener to document.body and check for 'keydown' events. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.
  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)


    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
    })

}

// const alphabet = [65, 66, 67];
//
// // Keep track of index outside of the event handler.
// let index = 0;
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which);
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
