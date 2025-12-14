// SUBSCRIPTION EXPAND / COLLAPSE
// (JS handles default open)

const singleRadio = document.getElementById("singleRadio");
const doubleRadio = document.getElementById("doubleRadio");

const singleCard = document.getElementById("singleCard");
const doubleCard = document.getElementById("doubleCard");

const singleExpand = document.querySelector(".single-expand-or-collapse");
const doubleExpand = document.querySelector(".double-expand-or-collapse");


// DEFAULT STATE ON PAGE LOAD (REQUIRED)

// Single subscription expanded
singleRadio.checked = true;
singleCard.classList.add("expanded");
singleExpand.style.display = "block";

// Double subscription collapsed
doubleCard.classList.add("collapsed");
doubleExpand.style.display = "none";


// WHEN SINGLE RADIO CLICKED
singleRadio.addEventListener("change", () => {

  // Expand Single
  singleCard.classList.remove("collapsed");
  singleCard.classList.add("expanded");
  singleExpand.style.display = "block";

  // Collapse Double
  doubleCard.classList.remove("expanded");
  doubleCard.classList.add("collapsed");
  doubleExpand.style.display = "none";
});

// WHEN DOUBLE RADIO CLICKED
doubleRadio.addEventListener("change", () => {

  // Expand Double
  doubleCard.classList.remove("collapsed");
  doubleCard.classList.add("expanded");
  doubleExpand.style.display = "block";

  // Collapse Single
  singleCard.classList.remove("expanded");
  singleCard.classList.add("collapsed");
  singleExpand.style.display = "none";
});
