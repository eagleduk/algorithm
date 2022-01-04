function search(arrs, input) {
  if (arrs.length === 1) {
    return;
  }

  const length = arrs.length;
  const half = parseInt(length / 2);
  const value = parseInt(arrs[half].children[1].innerHTML);

  if (value === input) {
    arrs[half].children[0].setAttribute("stroke", "red");
    return;
  } else if (value < input) {
    return search(arrs.slice(half), input);
  } else if (value > input) {
    return search(arrs.slice(0, half), input);
  }
}

function binarySearch(input) {
  const svg = document.querySelector("svg");

  const arrs = Array.from(svg.querySelectorAll("g"));
  search(arrs, parseInt(input));
}

function renderController() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const input = document.createElement("input");
  input.type = "text";

  const search = document.createElement("input");
  search.type = "button";
  search.addEventListener("click", (e) => {
    binarySearch(input.value);
  });
  search.value = "search";

  article.appendChild(input);
  article.appendChild(search);
}

export default () => {
  renderController();
  render(true);
};
