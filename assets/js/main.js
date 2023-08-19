// ======================================== MENU SHOW & MENU HIDDEN ========================
const navMenu = document.getElementById("nav-menu"),
  btnToggle = document.getElementById("button-toggle"),
  btnClose = document.getElementById("button-close");

if (btnToggle) {
  // Menu Show
  btnToggle.addEventListener("click", () => {
    console.log("btnToggle di click");
    navMenu.classList.add("show-menu");
  });
}

if (btnClose) {
  // Menu Hidden
  btnClose.addEventListener("click", () => {
    console.log("btnClose di click");
    navMenu.classList.remove("show-menu");
  });
}

// ======================================== REMOVE MENU MOBILE =============================
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

// ======================================== CHANGE BACKGROUND HEADER =======================
const scrollHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// ======================================== SHOW SCROLL UP =================================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag
  this.scrollY > 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// ======================================== SCROLL ARTICLES ACTIVE LINK ====================
const articles = document.querySelectorAll("article[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  articles.forEach((curr) => {
    const articleHeight = curr.offsetHeight,
      articleTop = curr.offsetTop - 58,
      articleId = curr.getAttribute("id"),
      articleClass = document.querySelector(
        ".nav-menu a[href*=" + articleId + "]"
      );

    if (articleClass) {
      if (scrollY > articleTop && scrollY <= articleTop + articleHeight) {
        articleClass.classList.add("active-link");
      } else {
        articleClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);
