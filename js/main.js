const links = [
  {
    label: "Week01 Notes",
    url: "week01-notes/index.html"
  },
  {
    label: "Week01 Code",
    url: "week01-code/index.html"
  },
  {
    label: "Week02 Code",
    url: "week02-code/index.html"
  },
  {
    label: "Week03 Code",
    url: "week03-code/index.html"
  },
  {
    label: "Week04 Code",
    url: "week04/index.html"
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