const exportDefault = () => {
  renderModule(controllers, Date.now());
};

const controllers = [
  {
    type: "button",
    text: "render",
    events: [
      {
        event: "click",
        action: exportDefault,
      },
    ],
    options: [{}],
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
    options: [{}],
  },
];

async function bubbleSort(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;

  const section = document.querySelector("section#sorting");
  const contents = section.querySelectorAll(`span.s${key}`);
  const ll = contents.length;

  for (let count = 0; count < ll; count++) {
    for (let index = 0; index < ll - 1 - count; index++) {
      let targetContent = contents[index];
      let targetValue = parseInt(targetContent.dataset.value, 0);

      let sourceContent = contents[index + 1];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);

      targetContent.classList.add("target");
      sourceContent.classList.add("target");

      await _timeout();

      if (!(targetValue <= sourceValue)) {
        await swap(targetContent, sourceContent);
      }

      targetContent.classList.remove("target");
      sourceContent.classList.remove("target");
    }
  }
  e.target.disabled = false;
}
export default exportDefault;
