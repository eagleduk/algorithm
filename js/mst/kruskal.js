/*

1. 모든 간선들을 오름차순 정렬
2. 최소 간선에 연결된 노드들 찾기
3. 노드 정보 저장
4. 최소 간선에 연결된 노드 찾기
5. 노드 정보들에 사이클이 이루어 지는지 검사


*/

function getParent(parents, node) {
  if (parents[node] === node) return node;
  else return (parents[node] = getParent(parents, parents[node]));
}

function union(parents, from, to) {
  const a = getParent(parents, from);
  const b = getParent(parents, to);

  if (a < b) parents[b] = a;
  else parents[a] = b;
}

function kruskal() {
  const lines = [];
  const parents = {};

  document
    .querySelector("g#paths")
    .querySelectorAll("path")
    .forEach((element) => {
      const [a, b] = element.dataset.nodes.split(",");
      parents[a] = a;
      parents[b] = b;
      lines.push([parseInt(element.dataset.value), a, b, element]);
    });

  lines.sort((a, b) => a[0] - b[0]);

  const results = [];

  while (lines.length) {
    const [value, from, to, element] = lines.shift();

    if (getParent(parents, from) !== getParent(parents, to)) {
      union(parents, from, to);
      results.push(element);
      element.setAttribute("stroke", "red");
    }
  }
  console.log(parents);
  console.log(results);
}

function renderController() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const go = document.createElement("input");
  go.type = "button";
  go.addEventListener("click", (e) => {
    kruskal();
  });
  go.value = "go";

  article.appendChild(go);
}

export default () => {
  renderController();
  render();
};
