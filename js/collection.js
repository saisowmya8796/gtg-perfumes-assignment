const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const icon = item.querySelector(".accordion-icon");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {

    const isOpen = item.classList.contains("expanded");

    // Collapse all
    items.forEach(i => {
      i.classList.remove("expanded");
      i.querySelector(".accordion-content").classList.remove("open");
      i.querySelector(".accordion-icon").src = "assets/icon-plus.svg";
    });

    // Expand only clicked one
    if (!isOpen) {
      item.classList.add("expanded");
      content.classList.add("open");
      icon.src = "assets/icon-minus.svg";
    }
  });
});
