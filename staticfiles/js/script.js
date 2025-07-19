
  const textArray = ["I am a Python Developer", "I am a Freelancer"];
  let index = 0;
  let charIndex = 0;
  const typedText = document.getElementById("typed-text");

  function typeText() {
    if (charIndex < textArray[index].length) {
      typedText.textContent += textArray[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 1500);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typedText.textContent = textArray[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      index = (index + 1) % textArray.length;
      setTimeout(typeText, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", typeText);


