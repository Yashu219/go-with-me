const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const happyImg = document.getElementById('happy-img');
const sadImg = document.getElementById('sad-img');

yesBtn.addEventListener('click', () => {
  yesBtn.textContent = "Yay! 💖";
  alert("Can't wait to go to Sringeri with you! 🥰");
});const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const happyImg = document.getElementById('happy-img');
const sadImg = document.getElementById('sad-img');

yesBtn.addEventListener('click', () => {
  yesBtn.textContent = "Yay! 💖";
  alert("Can't wait to go to Sringeri with you! 🥰");
});

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
  noBtn.style.position = 'absolute';
});

noBtn.addEventListener('click', () => {
  happyImg.style.display = 'none';
  sadImg.style.display = 'block';
});


noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener('click', () => {
  happyImg.classList.add('hidden');
  sadImg.classList.remove('hidden');
});
