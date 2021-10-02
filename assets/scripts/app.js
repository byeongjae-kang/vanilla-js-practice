const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const movieAddButton = document.body.querySelector("header button");
const movieCancelButton = document.body.querySelector(".btn--passive");

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

backdrop.addEventListener("click", toggleBackdropClickHandler);
movieAddButton.addEventListener("click", addMovieClickhandler);
movieCancelButton.addEventListener("click", addMovieClickhandler);
