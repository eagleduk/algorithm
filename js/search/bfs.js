function bfs(input) {
  const svg = document.querySelector("svg");

  svg.querySelectorAll("g").forEach((g) => {
    const circle = g.children[0];
    const text = g.children[1];
    const value = text.innerHTML;
    console.log(value);
    if (value === input) {
      circle.setAttribute("stroke", "red");
    }
  });
}

function renderController() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const input = document.createElement("input");
  input.type = "text";

  const search = document.createElement("input");
  search.type = "button";
  search.addEventListener("click", (e) => {
    bfs(input.value);
  });
  search.value = "search";

  article.appendChild(input);
  article.appendChild(search);
}

export default () => {
  renderController();
  render1();
};
