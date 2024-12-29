const text =
  "This is my third project, where we auto writing the text and then remove it.";

let index = 0;

function autoWrite() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(autoWrite, 100);
