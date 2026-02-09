document.addEventListener("DOMContentLoaded", () => {

  // Elements
  const envelope = document.getElementById("envelope-container");
  const letter = document.getElementById("letter-container");
  const letterWindow = document.querySelector(".letter-window");

  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");

  const title = document.getElementById("letter-title");
  const catImg = document.getElementById("letter-cat");
  const buttons = document.getElementById("letter-buttons");
  const finalText = document.getElementById("final-text");

  // Safety check (prevents silent crash)
  if (!envelope || !letter || !noBtn || !yesBtn) {
    console.error("❌ Required elements not found. Check IDs / class names.");
    return;
  }

  // Open envelope
  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      letterWindow.classList.add("open");
    }, 50);
  });

  // NO button runs away 😈
  noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // YES button clicked ❤️
  yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! 💖";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
  });

});
