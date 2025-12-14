let started = false;

function startCounting() {
  const counters = document.querySelectorAll(".stat-count");

  counters.forEach(counter => {
    let target = Number(counter.getAttribute("data-target"));
    let current = 0;

    let timer = setInterval(() => {
      current++;
      counter.textContent = current;

      if (current === target) {
        clearInterval(timer);
      }
    }, 20); // speed
  });
}

window.addEventListener("scroll", () => {
  const section = document.getElementById("stats");
  const rect = section.getBoundingClientRect();

  const sectionHalfVisible =
    rect.top <= window.innerHeight - rect.height / 2;

  if (!started && sectionHalfVisible) {
    startCounting();
    started = true; 
  }
});
