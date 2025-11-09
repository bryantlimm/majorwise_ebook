let currentPage = 0; // 0 = cover
const totalPages = 29;

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function getPageSrc(pageNumber) {
  // Handle last page (which is PNG)
  if (pageNumber === 29) {
    return `Pages/page 29.png`;
  } else {
    return `Pages/page ${pageNumber}.jpg`;
  }
}

function updatePages() {
  if (currentPage === 0) {
    // Only show cover
    leftPage.src = "Pages/cover.png";
    rightPage.style.display = "none";
  } else {
    // Show two pages side by side
    rightPage.style.display = "block";
    leftPage.src = getPageSrc(currentPage);

    // If there's no next page (odd last page), hide the right side
    if (currentPage + 1 > totalPages) {
      rightPage.style.display = "none";
    } else {
      rightPage.src = getPageSrc(currentPage + 1);
    }
  }
}

nextBtn.addEventListener("click", () => {
  if (currentPage === 0) {
    currentPage = 1; // from cover to page 1–2
  } else if (currentPage < totalPages - 1) {
    currentPage += 2; // next spread
  }
  updatePages();
});

prevBtn.addEventListener("click", () => {
  if (currentPage === 1) {
    currentPage = 0; // back to cover
  } else if (currentPage > 1) {
    currentPage -= 2; // previous spread
  }
  updatePages();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

// Initialize
updatePages();

if (currentPage === 0) {
  document.getElementById("book").classList.add("single");
} else {
  document.getElementById("book").classList.remove("single");
}
