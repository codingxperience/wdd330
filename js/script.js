// date function
let currentFullDate = document.lastModified;
let year = new Date().getFullYear();
let unavailable = document.getElementById("notAvailable");
document.getElementById("year").textContent = year;
unavailable.style.display = "none";

// Search function
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLocaleLowerCase();
  const searchTag = document.getElementsByTagName("li");
  let notAvailable = document.getElementById("notAvailable");

  let hasResults = false;
  Array.from(searchTag).forEach(function (searchTag) {
    const title = searchTag.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      searchTag.style.display = "";
      hasResults = true;
    } else {
      searchTag.style.display = "none";
    }
  });
  notAvailable.style.display = hasResults ? "none" : "block";
});
