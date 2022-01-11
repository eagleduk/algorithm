/*

1. 임의의 정점(노드)를 시작으로 최소 간선
2. 간선에 연결된 노드 찾기
3. 사이클 검사
4. 연결된 노드의 간선추가
5. 간선들을 오름차순 정렬
6. 최소 간선에 연결된 노드 찾기
7. 사이클 검사
...

*/

function prim() {
  const nodes = {};

  const checked = new Set();

  document
    .querySelector("g#nodes")
    .querySelectorAll("circle")
    .forEach((element) => {
      const id = element.id;
      Array.from(element.dataset.targets).forEach((target) => {
        let value;
        if (document.querySelector(`path#from${id}_to${target}_path`)) {
          value = document.querySelector(`path#from${id}_to${target}_path`)
            .dataset.value;
        } else {
          value = document.querySelector(`path#from${target}_to${id}_path`)
            .dataset.value;
        }
        nodes[id]
          ? nodes[id].push([parseInt(value), id, target])
          : (nodes[id] = [[parseInt(value), id, target]]);
      });
    });

  checked.add("A");
  let lines = [...nodes["A"]];
  lines.sort((a, b) => a[0] - b[0]);

  while (lines.length) {
    const [value, from, to] = lines.shift();
    if (checked.has(to)) continue;

    checked.add(to);
    lines = [...lines, ...nodes[to]];
    lines.sort((a, b) => a[0] - b[0]);

    let element;
    if (document.querySelector(`path#from${from}_to${to}_path`)) {
      element = document.querySelector(`path#from${from}_to${to}_path`);
    } else {
      element = document.querySelector(`path#from${to}_to${from}_path`);
    }
    element.setAttribute("stroke", "red");
  }
}

function renderController() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const go = document.createElement("input");
  go.type = "button";
  go.addEventListener("click", (e) => {
    prim();
  });
  go.value = "go";

  article.appendChild(go);
}

export default () => {
  renderController();
  render();
};
