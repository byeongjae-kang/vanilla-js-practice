const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const movieAddButton = document.querySelector("header button");
const movieCancelButton = document.querySelector(".btn--passive");
const movieSubmitButton = document.querySelector(".btn--success");
const allInputs = addMovieModal.querySelectorAll("input");

const toggleBackdropClickHandler = () => {
  addMovieClickhandler();
};

const addMovieClickhandler = () => {
  backdrop.classList.toggle("visible");
  addMovieModal.classList.toggle("visible");
};

const cancelMovieClickHandler = () => {
  addMovieClickhandler();
};

const submitMovieClickHandler = () => {
  const titleInput = allInputs[0].value;
  const urlInput = allInputs[1].value;
  const ratingInput = allInputs[2].value;

  if (
    titleInput.trim() === "" ||
    urlInput.trim() === "" ||
    ratingInput.trim() === "" ||
    +ratingInput < 1 ||
    +ratingInput > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
};

backdrop.addEventListener("click", toggleBackdropClickHandler);
movieAddButton.addEventListener("click", addMovieClickhandler);
movieCancelButton.addEventListener("click", cancelMovieClickHandler);
movieSubmitButton.addEventListener("click", submitMovieClickHandler);
