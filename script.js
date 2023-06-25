const animatedElementsRight = document.querySelectorAll(".animated-right");
const animatedElementsLeft = document.querySelectorAll(".animated-left");
const animatedElementsTop = document.querySelectorAll(".animated-top");

window.addEventListener("scroll", animate);

function animate() {

  animatedElementsRight.forEach((elem) => {
    const distView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distView < 0) {
      elem.classList.add("active");
    }
  });

  animatedElementsLeft.forEach((elem) => {
    const distView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distView < 0) {
      elem.classList.add("active");
    }
  });

  animatedElementsTop.forEach((elem) => {
    const distView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distView < 0) {
      elem.classList.add("active");
    }
  });
}