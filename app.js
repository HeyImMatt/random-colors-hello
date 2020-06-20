function randomRGB() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function changeColor() {
  const h1 = document.querySelector('h1');
  h1.style.color = randomRGB();
}

setInterval(changeColor, 500)