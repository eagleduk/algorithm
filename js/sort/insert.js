const controllers = [
  {
    type: "button",
    text: "render",
    events: [
      {
        event: "click",
        action: render,
      },
    ],
  },
  {
    type: "button",
    text: "play",
    events: [
      {
        event: "click",
        action: insertSort,
      },
    ],
  },
];

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
  renderModule(controllers);
};
