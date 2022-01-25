function dfs(input) {
  const svg = document.querySelector("svg");

  const gs = svg.querySelectorAll("g");
  const check = [];
  const checked = new Set();

  check.push(0);

  while (check.length) {
    let index = check.shift();

    if (checked.has(index)) continue;

    let rect = gs[index].children[0];
    let text = gs[index].children[1];
    let value = text.innerHTML;

    console.log(value);

    if (input === value) rect.setAttribute("stroke", "red");

    checked.add(index);

    let left = (index + 1) * 2 - 1;
    let right = (index + 1) * 2;

    if (gs[right]) check.unshift(right);
    if (gs[left]) check.unshift(left);
  }
}

function renderController() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const input = document.createElement("input");
  input.type = "text";

  const search = document.createElement("input");
  search.type = "button";
  search.addEventListener("click", (e) => {
    dfs(input.value);
  });
  search.value = "search";

  article.appendChild(input);
  article.appendChild(search);
}

export default () => {
  renderController();
  renderTree();
};
