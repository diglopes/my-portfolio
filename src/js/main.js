import '../scss/main.scss'

const buttons = document.querySelectorAll(".nav-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", ({ currentTarget }) => {
    changeActiveMenuItem(currentTarget);
    const { article } = currentTarget.dataset;
    removeCurrentArticle();
    showRelatedArticle(article);
  });
});

function removeCurrentArticle() {
  const article = document.querySelector(".show");
  if (article) {
    article.classList.remove("show");
    article.classList.add("hide");
  }
}

function showRelatedArticle(selector) {
  const article = document.getElementById(selector);
  article.classList.remove("hide");
  article.classList.add("show");
}

function changeActiveMenuItem(currentElement) {
  const oldActive = document.querySelector(".active");
  oldActive.classList.remove("active");
  currentElement.classList.add("active");
}
