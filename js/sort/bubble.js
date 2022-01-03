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
        action: bubbleSort,
      },
    ],
  },
];

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
  renderModule(controllers);
};
