// =====================
// CART.JS
// =====================

const addToCartLink = document.getElementById("addToCartLink");

// Subscription radios
const subRadios = document.getElementsByName("subType");

// Single Fragrance radios selections
const fragSingle = document.getElementsByName("frag1");

// Double fragrance radios selections
const fragDouble1 = document.getElementsByName("frag2");
const fragDouble2 = document.getElementsByName("frag3");

function getSelectedValue(nodeList) {
  for (let r of nodeList) {
    if (r.checked) return r.parentElement.innerText.trim().toLowerCase();
  }
}

function updateCartURL() {
  let type = "";
  for (let r of subRadios) {
    if (r.checked) {
      type = r.id === "singleRadio" ? "single" : "double";
    }
  }

  let finalURL = "";

  if (type === "single") {
    const f = getSelectedValue(fragSingle);
    finalURL = `https://example.com/cart?type=single&fragrance=${f}`;
  } else {
    const f1 = getSelectedValue(fragDouble1);
    const f2 = getSelectedValue(fragDouble2);
    finalURL = `https://example.com/cart?type=double&f1=${f1}&f2=${f2}`;
  }

  addToCartLink.href = finalURL;
}

// Trigger updates when any radio changes
document.addEventListener("change", updateCartURL);

// Set initial URL
updateCartURL();
