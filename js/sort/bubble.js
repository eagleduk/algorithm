async function bubbleSort() {
  const section = document.querySelector("section");

  const ll = section.children.length;

  for (let count = 0; count < ll; count++) {
    for (let index = 0; index < ll - 1 - count; index++) {
      let targetContent = section.children[index];
      let targetValue = parseInt(targetContent.dataset.value, 0);

      let sourceContent = section.children[index + 1];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);

      if (targetValue <= sourceValue) {
        continue;
      }

      await swap(targetContent, sourceContent);
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
  play.addEventListener("click", bubbleSort);

  const control = document.querySelector("article");
  control.appendChild(render1);
  control.appendChild(play);

  render();
};
