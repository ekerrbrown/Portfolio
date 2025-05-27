"use strict";

const skills = document.querySelectorAll(".skills-section");
const desc = document.querySelectorAll(".hide-desc");
const skillHeading = document.querySelectorAll(".skill-name");
const unicode = document.querySelectorAll(".unicode");
const skillsImage = document.querySelector(".skill-img");

const resetUnicode = function () {
  unicode.forEach((unicode) => {
    unicode.innerHTML = `&#9662;`;
  });
};

const removeHeading = function () {
  skillHeading.forEach((heading) => {
    heading.classList.remove("selected");
  });
};

skills.forEach((skill) => {
  let dataNum = "";
  skill.addEventListener("click", function () {
    desc.forEach((description) => {
      description.classList.add("hidden");
    });

    dataNum = skill.getAttribute("data-id");
    console.log(dataNum);

    skillsImage.src = `Images/skills-img-${dataNum}.png`;
    removeHeading();
    resetUnicode();

    skill.lastElementChild.classList.toggle("hidden");
    skill.firstElementChild.classList.add("selected");
    skill.querySelector(".unicode").innerHTML = "&#9652";
  });
});

console.log(skills);

const slider = function () {
  const slides = document.querySelectorAll(".work-history");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  if (window.innerWidth >= 768) {
    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    document.addEventListener("keydown", function (e) {
      if (window.innerWidth > 1200) {
      }
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });

    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
        // const { slide } = e.target.dataset;

        curSlide = Number(e.target.dataset.slide);
        goToSlide(curSlide);
        activateDot(curSlide);
      }
    });
  }
};
slider();
