/*

1. 모든 간선들을 오름차순 정렬
2. 최소 간선에 연결된 노드들 찾기
3. 노드 정보 저장
4. 최소 간선에 연결된 노드 찾기
5. 노드 정보들에 사이클이 이루어 지는지 검사


*/

function kruskal() {}

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
