const collapsible_btn = document.querySelectorAll(".collapsible__btn");

collapsible_btn.forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".nav").classList.toggle("collapsible--expand");
  });
});

// const collapsible = document.querySelector(".collapsible");
// collapsible.addEventListener("click", function () {
//   this.classList.toggle("collapsible--expand");
// });

// const collapsible = document.querySelector(".collapsible");

// collapsible_btn.addEventListener("click", expand);

// function expand() {
//   collapsible.classList.toggle("collapsible--expand");
// }
