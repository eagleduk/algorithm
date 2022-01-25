const exportDefault = () => {
  renderTreeModule(controllers, Date.now());
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
        action: bfs,
      },
    ],
  },
];

async function bfs(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;
  const input = e.target.previousElementSibling;

  const svg = document.querySelector("svg#search");
  const contents = svg.querySelectorAll(`g.g${key}`);
  const ll = contents.length;

  for (let i = 0; i < ll; i++) {
    const content = contents[i];

    const circle = content.children[0];
    circle.setAttribute("class", "compare");

    const text = content.children[1];
    const value = text.innerHTML;

    await _timeout();

    if (value === input.value) {
      circle.setAttribute("class", "target");
    } else {
      circle.setAttribute("class", "disabled");
    }
  }

  e.target.disabled = false;
}

export default exportDefault;
