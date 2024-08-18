// function onFocus() {
//   // document.body.style.fontSize = '30px';
//   document.getElementById("inputfocus").style.fontSize = "20px";
//   document.getElementById("inputfocus").style.border = "2px solid red";
//   document.getElementById("inputfocus").style.outline = "none";
//   document.getElementById("inputfocus").style.transition = "all .5s";
// }

// function onBlur() {
//   document.getElementById('inputfocus').style.fontSize = "";
//   document.getElementById("inputfocus").style.border = "";
// }

// // Focus:
// document.getElementById("inputfocus").addEventListener("focus", onFocus);

// // Blur:
// document.getElementById("inputfocus").addEventListener("blur", onBlur);

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'gray') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#000";
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#000";
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#fff";
    }
  })
})