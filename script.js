const typedName = document.querySelector(".typed-name");

if (typedName) {
  const text = typedName.dataset.text;
  let i = 0;

  function typeText() {
    typedName.textContent = text.slice(0, i + 1);
    i++;

    if (i < text.length) {
      setTimeout(typeText, 90);
    } else {
      setTimeout(() => {
        typedName.textContent = text;
      }, 1200);
    }
  }

  typeText();
}
