let homeListBtn = document.querySelector("  .homeFirstPage .logoBox i");
let homeList = document.querySelector("  .homeFirstPage header ul");
homeListBtn.addEventListener("click", function () {
  homeList.classList.toggle("showList");
});
let scrollList = document.querySelector(".homeFirstPage .ScrollList");
let scrollSearch = document.querySelector("header form");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 300 && window.innerWidth > 1200) {
    scrollList.style.cssText = `display:flex`;
    scrollSearch.style.cssText = `display:block`;
  } else {
    scrollList.style.cssText = `display:none`;
    scrollSearch.style.cssText = `display:none`;
  }

  if (
    window.scrollY >= 300 &&
    window.innerWidth <= 1200 &&
    window.innerWidth > 700
  )
    scrollSearch.style.cssText = `display:block; flex:1; margin: 0px 10px ;`;
});

let footerColumns = document.querySelectorAll(".footerColumn");
let footer = document.querySelectorAll(".footer ul");

footerColumns.forEach((column) => {
  let header = column.querySelector("h4");
  let ul = column.querySelector("ul");

  header.addEventListener("click", () => {
    let isDisplayed = ul.style.display === "block";

    footer.forEach((col) => (col.style.display = "none"));

    ul.style.display = isDisplayed ? "none" : "block";
  });
});

let getTheApp = document.querySelector(" .getTheApp");
getTheApp.addEventListener("click", function () {
  footer.forEach((col) => (col.style.display = "none"));
  let item = document.querySelector(".getTheApp + ul");
  let isDisplayed = item.style.display === "block";
  item.style.display = isDisplayed ? "none" : "block";
});

let scrollbtn = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000
    ? scrollbtn.classList.add("show")
    : scrollbtn.classList.remove("show");
};




scrollbtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });


});

window.addEventListener("load", () => {
  const elements = document.querySelectorAll("h1, p");

  elements.forEach((element) => {
    element.classList.add("visible");
  });
});
