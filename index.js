var activePage = "projects";

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  showPage(id);
  activePage = id;
}

// function showSkills() {
//   hide(activePage);
//   show("skills");
//   activePage = "Skills";
// }

// function showProjects() {
//   hide(activePage);
//   show("projects");
//   activePage = "projects";
// }

// function showLanguages() {
//   hide(activePage);
//   show("languages");
//   activePage = "languages";
// }

// function showPage(id) {
//   hide(activePage);
//   show(id);
//   activePage = id;
// }
