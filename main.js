const form = document.querySelector(".form-box");

if (form) {
  form.addEventListener("submit", () => {
    const selected = document.querySelector(".input-radio:checked");
    localStorage.setItem("rating", selected.value);
  });
}

const ratingSelected = document.querySelector(".end-box__selected");

if (ratingSelected) {
  const isRating = localStorage.getItem("rating");
  ratingSelected.innerText = `You selected ${isRating} out of 5`;
}