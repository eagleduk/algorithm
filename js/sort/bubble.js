let key;

const controllers = [
  {
    type: "button",
    text: "render",
    events: [
      {
        event: "click",
        action: () => {
          key = Date.now();
          renderModule(controllers, key);
        },
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

async function bubbleSort(e) {
  e.target.disabled = true;
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
export default (time) => {
  key = time;
  renderModule(controllers, time);
};
