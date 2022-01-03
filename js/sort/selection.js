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
        action: selectionSort,
      },
    ],
  },
];

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
  renderModule(controllers);
};
