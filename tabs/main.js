const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".content");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("active"));
    this.classList.add("active");
    tabContent[index].classList.add("active");
  });
});
