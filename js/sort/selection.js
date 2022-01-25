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

async function selectionSort(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;

  const section = document.querySelector("section#sorting");
  const contents = section.querySelectorAll(`span.s${key}`);
  const ll = contents.length;

  for (let standard = 0; standard < ll; standard++) {
    let targetContent = contents[standard];
    targetContent.classList.add("standard");

    let minIndex = standard;
    let minContent = contents[minIndex];
    let minValue = parseInt(minContent.dataset.value, 0);
    //minContent.classList.add("target");

    for (let index = standard; index < ll; index++) {
      let sourceContent = contents[index];
      let sourceValue = parseInt(sourceContent.dataset.value, 0);
      sourceContent.classList.add("compare");

      await _timeout();

      if (sourceValue < minValue) {
        minContent.classList.remove("target");
        sourceContent.classList.add("target");
        minValue = sourceValue;
        minIndex = index;
        minContent = sourceContent;
      }
      sourceContent.classList.remove("compare");
    }

    let sourceContent = contents[minIndex];
    await swap(targetContent, sourceContent);

    sourceContent.classList.remove("target");
    targetContent.classList.remove("standard");
  }
  e.target.disabled = false;
}

export default exportDefault;
