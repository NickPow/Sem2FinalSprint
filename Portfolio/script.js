const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    projects.forEach((project) => {
      if (
        filter === "all" ||
        project.getAttribute("data-category") === filter
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.offsetTop - 60;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
