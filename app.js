const title = document.querySelector(".hero-title");
const text = title.textContent;
let index = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = isDeleting ? text.slice(0, index - 1) : text.slice(0, index);
  title.textContent = currentText;

  if (!isDeleting && index <= text.length) {
    index++;
  } else {
    isDeleting = true;
    index--;
  }

  if (index === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, 150);
}

typeEffect();
