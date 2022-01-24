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
        action: insertSort,
      },
    ],
  },
];

async function insertSort(e) {
  e.target.disabled = true;
  const section = document.querySelector("section#sorting");
  const contents = section.querySelectorAll(`span.s${key}`);
  const ll = contents.length;

  for (let stand = 1; stand < ll; stand++) {
    let targetContent = contents[stand];
    let targetValue = parseInt(targetContent.dataset.value, 0);
    targetContent.classList.add("target");

    let temp = stand;
    while (contents[--temp]) {
      let sourceContent = contents[temp];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);
      sourceContent.classList.add("target");

      await _timeout();

      if (targetValue < sourceValue) {
        await swap(sourceContent, targetContent);
        targetContent.classList.remove("target");
        targetContent = sourceContent;
        targetValue = parseInt(targetContent.dataset.value, 0);
      } else {
        sourceContent.classList.remove("target");
        break;
      }
    }
    targetContent.classList.remove("target");
  }
  e.target.disabled = false;
}

export default (time) => {
  key = time;
  renderModule(controllers, time);
};
