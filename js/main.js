const links = [
  {
    label: "Week1 Code SAMPLE",
    url: "week1-code/index.html",
    label: "Week1 Notes",
    url: "week1-notes/index.html"
  }
]

function loadIndex() {
  const ol = document.querySelector('#linksList');

  links.forEach(link => {
    const li = document.createElement('li');
    const href = document.createElement('a');
    href.setAttribute('href', link.url);
    href.innerText = link.label;

    li.appendChild(href);
    ol.appendChild(li);
  })
}