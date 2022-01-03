async function insertSort() {
  const section = document.querySelector("section");

  const ll = section.children.length;
  for (let stand = 1; stand < ll; stand++) {
    let targetContent = section.children[stand];
    let targetValue = parseInt(targetContent.dataset.value, 0);

    let temp = stand;
    while (section.children[--temp]) {
      let sourceContent = section.children[temp];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);

      if (targetValue < sourceValue) {
        await swap(sourceContent, targetContent);
        targetContent = sourceContent;
        targetValue = parseInt(targetContent.dataset.value, 0);
      } else {
        break;
      }
    }
  }
}

export default () => {
  const render1 = document.createElement("input");
  render1.type = "button";
  render1.value = "render1";
  render1.addEventListener("click", render);

  const play = document.createElement("input");
  play.type = "button";
  play.value = "play";
  play.addEventListener("click", insertSort);

  const control = document.querySelector("article");
  control.appendChild(render1);
  control.appendChild(play);

  render();
};
