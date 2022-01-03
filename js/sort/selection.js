async function selectionSort() {
  const section = document.querySelector("section");

  const ll = section.children.length;

  for (let stand = 0; stand < ll; stand++) {
    let targetContent = section.children[stand];

    let minValue = parseInt(targetContent.dataset.value, 0);
    let minIndex = stand;

    for (let index = stand + 1; index < ll; index++) {
      let sourceContent = section.children[index];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);
      if (sourceValue < minValue) {
        minValue = sourceValue;
        minIndex = index;
      }
    }

    let sourceContent = section.children[minIndex];
    await swap(targetContent, sourceContent);
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
  play.addEventListener("click", selectionSort);

  const control = document.querySelector("article");
  control.appendChild(render1);
  control.appendChild(play);

  render();
};
