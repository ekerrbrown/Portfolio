"use strict";
const imgLogo = document.querySelector(".logo-container");
const ResumeDownload = document.querySelectorAll(".download-resume");
const exitButton = document.querySelector(".exit-btn");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");

const enterMobileNav = function () {
  navbar.classList.remove("hidden");
  imgLogo.classList.add("hidden");
  menuBtn.classList.add("hidden");
};

const exitMobileNav = function () {
  navbar.classList.add("hidden");
  imgLogo.classList.remove("hidden");
  menuBtn.classList.remove("hidden");
};

window.addEventListener("resize", () => {
  if (window.innerWidth <= 720) {
    navbar.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  } else {
    navbar.classList.remove("hidden");
    menuBtn.classList.add("hidden");
  }
});

window.onload = function () {
  ResumeDownload.forEach((button) => {
    button.addEventListener("click", downloadFile);

    menuBtn.addEventListener("click", function () {
      enterMobileNav();
    });

    exitButton.addEventListener("click", function () {
      exitMobileNav();
    });

    console.log(navbar);

    console.log(exitButton);
  });

  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  if (window.innerWidth <= 720) {
    navbar.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
  }
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function downloadFile() {
  const link = document.createElement("a");
  link.href = "/Elijah Kerr-Brown Resume - Marketing.pdf"; // Replace with your file path
  link.download = "Elijah Kerr-Brown Resume"; // Optional: rename file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
