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
    options: [{}],
  },
  {
    type: "text",
    text: "",
    events: [{}],
    options: [{ name: "maxLength", value: 2 }],
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
    options: [{}],
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
    const content = contents[i];
    const rect = content.children[0];
    rect.setAttribute("class", "compare");

    const text = content.children[1];
    const value = text.innerHTML;

    await _timeout();

    if (value === input.value) {
      rect.setAttribute("class", "target");
    } else {
      rect.setAttribute("class", "disabled");
    }
  }
  e.target.disabled = false;
}

export default exportDefault;
