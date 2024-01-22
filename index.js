var activePage = "home";

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
  console.info("showPage", id);
  var prevlink = document.querySelector("a[data-page=" + activePage + "]");
  hide(activePage);
  var nextlink = document.querySelector(`a[data-page=${id}]`);
  nextlink.classList.add("active");
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.dataset.tolowerCase();
      console.warn("event", page);
      showPage(page);
    }
  });
}

function sortSkillsByEndorcements(a, b) {
  console.info("sort", a, b);
  return b.endorcements - a.endorcements;
}
function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills() {
  // skills.sort(sortSkillsByEndorcements);
  skills.sort(sortByName);

  var ul = document.querySelector("#skills ul");

  var skills = ["HTML", "CSS", "JS"];

  var text = skills.map(function (skill) {
    console.info("inside %o map", skill);
    return `<li> ${skill}</li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");

  ul.innerHTML = "<li>HTML</li";
  ul.innerHTML = ul.innerHTML + "<li>CSS</li";
  ul.innerHTML = ul.innerHTML + "<li>JS</li";
  ul.innerHTML += "<li>JSS</li";
}

function loadSkills() {
  fetch("skills.json").then(function (r) {
    r.json().then(function (skills) {
      showSkills(skills);
    });
  });
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
// executii
showPage(activePage);
initEvents();
loadSkills();
