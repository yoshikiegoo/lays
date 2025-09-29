let orderList = [];

function addToOrder(menu, harga) {
  orderList.push({ menu, harga });
  updateSummary();
  showToast(`${menu} berhasil ditambahkan!`);
}

// Update ringkasan pesanan
function updateSummary() {
  const summary = document.getElementById("orderSummary");
  if (orderList.length === 0) {
    summary.innerHTML = "<em>Belum ada pesanan.</em>";
    return;
  }
  let html = '<ul style="padding-left:18px;">';
  let total = 0;
  orderList.forEach((item) => {
    html += `<li>${item.menu} - Rp ${item.harga.toLocaleString()}</li>`;
    total += item.harga;
  });
  html += `</ul><strong>Total: Rp ${total.toLocaleString()}</strong>`;
  summary.innerHTML = html;
}

// Submit pesanan
function submitOrder(e) {
  e.preventDefault();
  if (orderList.length === 0) {
    alert("Silakan pilih menu terlebih dahulu!");
    return;
  }
  const nama = document.getElementById("namaPemesan").value;
  const alamat = document.getElementById("alamatPemesan").value;
  showToast(`Terima kasih ${nama}! Pesanan Anda akan dikirim ke ${alamat}.`);
  orderList = [];
  updateSummary();
  document.getElementById("namaPemesan").value = "";
  document.getElementById("alamatPemesan").value = "";
}

window.addEventListener("DOMContentLoaded", function () {
  // Welcome overlay
  const welcomeOverlay = document.getElementById("welcomeOverlay");
  const welcomeBtn = document.getElementById("welcomeBtn");
  if (welcomeOverlay && welcomeBtn) {
    welcomeBtn.onclick = function () {
      welcomeOverlay.classList.remove("show");
      setTimeout(() => {
        welcomeOverlay.style.display = "none";
      }, 400);
    };
  }

  // Popup menu detail
  function showMenuDetail(menu, harga, imgSrc) {
    document.getElementById("overlay").classList.add("active");
    const popup = document.getElementById("menuDetailPopup");
    popup.classList.add("show");
    popup.style.display = "flex";
    document.getElementById("popupTitle").textContent = menu;
    document.getElementById("popupImg").src = imgSrc;
    document.getElementById("popupPrice").textContent =
      "Rp " + harga.toLocaleString();
    document.getElementById("popupOrderBtn").onclick = function () {
      addToOrder(menu, harga);
      closeMenuDetail();
    };
  }

  function closeMenuDetail() {
    document.getElementById("overlay").classList.remove("active");
    const popup = document.getElementById("menuDetailPopup");
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
    }, 400);
  }

  document.getElementById("closePopup").onclick = closeMenuDetail;
  document.getElementById("overlay").onclick = closeMenuDetail;

  // Expose showMenuDetail globally
  window.showMenuDetail = showMenuDetail;
});

// Notifikasi

function showToast(message) {
  let toast = document.getElementById("toastNotif");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotif";
    toast.style.position = "fixed";
    toast.style.bottom = "32px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#2d3e50";
    toast.style.color = "#ffd166";
    toast.style.padding = "12px 28px";
    toast.style.borderRadius = "20px";
    toast.style.fontWeight = "600";
    toast.style.fontSize = "1.08rem";
    toast.style.boxShadow = "0 2px 12px #ffd16688";
    toast.style.zIndex = "10002";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);
}
