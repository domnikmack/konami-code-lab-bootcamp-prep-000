const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.getElementsByTagName('body')[0].addEventListener('keydown', function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  let index =0;
  if (key === code[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Congrats!");

      index = 0;
    }
  } else {
    index = 0;
  }
});

}
