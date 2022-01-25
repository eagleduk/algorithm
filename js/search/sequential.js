const exportDefault = () => {
  renderArrayModule(controllers, Date.now());
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
    type: "input",
    text: "",
    events: [{}],
  },
  {
    type: "button",
    text: "search",
    events: [
      {
        event: "click",
        action: sequentialSearch,
      },
    ],
  },
];

async function sequentialSearch(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;
  const input = e.target.previousElementSibling;

  const svg = document.querySelector("svg#search");
  const contents = svg.querySelectorAll(`g.g${key}`);
  const ll = contents.length;

  for (let i = 0; i < ll; i++) {
    let content = contents[i];
    let rect = content.children[0];
    let text = content.children[1];

    rect.setAttribute("class", "compare");
    const value = text.innerHTML;

    await _timeout();

    if (value === input.value) {
      rect.setAttribute("class", "target");
    } else {
      rect.setAttribute("class", "");
    }
  }
  e.target.disabled = false;
}

export default exportDefault;
