const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImg = document.getElementById('main-img');

// Yes button behavior
yesBtn.addEventListener('click', () => {
  yesBtn.textContent = "Yay! 💖";
  alert("Can't wait to go to Sringeri with you! 🥰");
});

// No button hover dodge
noBtn.addEventListener('mouseenter', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
});

// Swap image on No click
noBtn.addEventListener('click', () => {
  mainImg.src = 'cry.jpg';
  mainImg.alt = 'Sad face';
});
