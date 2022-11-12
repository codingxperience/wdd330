const links = [
  {
    label: "Week01 Notes",
    url: "week01-notes/index.html"
  },
  {
    label: "Week01",
    url: "week01/index.html"
  },
  {
    label: "Week02",
    url: "week02/index.html"
  },
  {
    label: "Week03",
    url: "week03/index.html"
  },
  {
    label: "Week04",
    url: "week04/index.html"
  },
  {
    label: "Week05",
    url: "week05/debug.html"
  },
  {
    label: "Week06",
    url: "week05/solo01/to-do.html"
  },
  {
    label: "Week07",
    url: "week07/index.html"
  },
  {
    label: "Week08",
    url: "week08/index.html"
  },
  {
    label: "Week09", label: "Proposal",
    url: "week09/index.html", 
    url: "week09/index.html"
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