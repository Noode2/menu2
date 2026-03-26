// ===== LOAD ANIMATION =====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 120);
  });
});


// ===== CATEGORY FILTER =====
function filterMenu(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.classList.contains(category)
        ? card.style.display = "block"
        : card.style.display = "none";
    }
  });
}


// ===== SEARCH FUNCTION =====
document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});