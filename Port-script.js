const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controller");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".content");

function Transitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    //removes select from buttons
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hides sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

Transitions();
