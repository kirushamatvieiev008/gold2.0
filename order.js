const btnOpenModal = document.querySelector(".buy");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backDrop");
const closeModal = document.querySelector(".closeModalBtn");

const phoneSource = document.querySelector(".phoneSource");
const tgSource = document.querySelector(".tgSource");
const instSource = document.querySelector(".instSource");
const sources = document.querySelectorAll(".conectionSource");

console.log(btnOpenModal);

btnOpenModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  backDrop.style.display = "block";
});

closeModal.addEventListener("click", (evemt) => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
  backDrop.style.display = "none";
});

modal.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList[0] === "makeOrderbyPhone") {
    sources.forEach((source) => {
      source.style.display = "none";
    });
    phoneSource.style.display = "block";
  } else if (event.target.classList[0] === "makeOrderbyTg") {
    sources.forEach((source) => {
      source.style.display = "none";
    });
    tgSource.style.display = "block";
  } else if (event.target.classList[0] === "makeOrderbyInst") {
    sources.forEach((source) => {
      source.style.display = "none";
    });
    instSource.style.display = "block";
  }

  console.log(event.target.classList);
});
