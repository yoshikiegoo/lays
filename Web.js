function showAlert() {
  alert("Ini adalah alert dari Card 1!");
}

function toggleCard2() {
  const card2 = document.getElementById("card2");
  const btn = document.getElementById("toggleBtn");
  if (card2.style.display === "none") {
    card2.style.display = "";
    btn.textContent = "Sembunyikan Card";
  } else {
    card2.style.display = "none";
    btn.textContent = "Tampilkan Card";
  }
}

// Scroll to Top Button
window.addEventListener("scroll", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (!scrollTopBtn) return;
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }
  // Dark mode toggle
  const darkModeBtn = document.getElementById("darkModeToggle");
  if (darkModeBtn) {
    darkModeBtn.onclick = function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
      } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
      }
    };
  }
});
