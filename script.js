const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const overlayLinks = doc.querySelectorAll(".overlay__content a");
let question = document.querySelectorAll(".question");

document.addEventListener("DOMContentLoaded", () => {
  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });

  overlayLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });
  });
});

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

function showAlert() {
  
  alert("Jūsų pranešimas sėkmingai išsiųstas!")
}

