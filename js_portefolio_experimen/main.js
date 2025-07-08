// Matrix-like flowing code background
const canvas = document.getElementById("code-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = Array(256).join("0").split("");
function drawMatrix() {
  ctx.fillStyle = "rgba(6, 39, 25, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  letters.forEach((y, index) => {
    const text = String.fromCharCode(3e4 + Math.random() * 33);
    const x = index * 10;
    ctx.fillText(text, x, y);
    letters[index] = y > canvas.height + Math.random() * 1e4 ? 0 : y + 10;
  });
}
setInterval(drawMatrix, 50);

// ParticlesJS Config
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.6 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typing Effect for Cryptic Text Animation
const nameSpan = document.querySelector(".animated-name");
const finalName = "David Silva";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function scrambleText(el, text, duration = 5000, interval = 150) {
  let iteration = 0;
  const maxIterations = duration / interval;

  const scramble = setInterval(() => {
    el.textContent = text
      .split("")
      .map((char, i) => {
        if (i < iteration) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    iteration++;
    if (iteration > text.length) clearInterval(scramble);
  }, interval);
}

window.addEventListener("load", () => {
  if (nameSpan) scrambleText(nameSpan, finalName);
});

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
