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
        action: dfs,
      },
    ],
  },
];

async function dfs(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;
  const input = e.target.previousElementSibling;

  const svg = document.querySelector("svg#search");

  const contents = svg.querySelectorAll(`g.g${key}`);
  const check = [];
  const checked = new Set();

  check.push(0);

  while (check.length) {
    let index = check.shift();

    if (checked.has(index)) continue;

    let circle = contents[index].children[0];
    circle.setAttribute("class", "compare");

    let text = contents[index].children[1];
    let value = text.innerHTML;

    await _timeout();

    if (value === input.value) circle.setAttribute("class", "target");
    else circle.setAttribute("class", "disabled");

    checked.add(index);

    let left = (index + 1) * 2 - 1;
    let right = (index + 1) * 2;

    if (contents[right]) check.unshift(right);
    if (contents[left]) check.unshift(left);
  }
  e.target.disabled = false;
}

export default exportDefault;
